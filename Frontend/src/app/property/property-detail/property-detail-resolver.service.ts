import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailResolverService implements Resolve<Property>{

constructor(
  private housingServive: HousingService,
  private router: Router ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Property|any> | Property{
      const propId = route.params['id'];
      return this.housingServive.getProperty(+propId).pipe(
        catchError(error => {
          this.router.navigate(['/']);
          return of(null);
        })
      );
  }

}
