import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, catchError, concat, concatMap, count, of, retry, retryWhen, throwError } from "rxjs";
import { AlertifyService } from "./alertify.service";
import { Injectable } from "@angular/core";
import { ErrorCode } from "../enums/enums";

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptorService implements HttpInterceptor{

  constructor(private alertify: AlertifyService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler){
    console.log("HTTP Request started");
    return next.handle(request)
      .pipe(
        retryWhen(error =>this.retryRequest(error,10)),
        catchError((error: HttpErrorResponse) => {
          const errorMessage = this.setError(error);
          console.log(error);
          this.alertify.error(errorMessage);
          return throwError(errorMessage);
        })
      )
  }

  //Retry the request in case of error
  retryRequest(error: Observable<any>, retryCount:number) : Observable<any>
  {
    return error.pipe(
      concatMap((checkErr: HttpErrorResponse, count: number) => {

        if(count <= retryCount){
          switch(checkErr.status){
            case ErrorCode.serverDown :
              return of(checkErr);

            case ErrorCode.unauthorized :
              return of(checkErr);

          }
        }
        return throwError(checkErr);
      })
    )
  }

  setError(error: HttpErrorResponse): string {
    let errorMessage = 'Unknown error occured';
    if(error.error instanceof ErrorEvent) {
      //Client side error
      errorMessage = error.error.message;
    } else {
      //Server side error
      if(error.status===401){
        return error.statusText;
      }
      if(error.error.errorMessage && error.status !== 0){
        errorMessage = error.error.errorMessage;
      }
      if(!error.error.errorMessage && error.error && error.status !== 0){
        errorMessage = error.error;
      }
    }
    return errorMessage;
  }

}
