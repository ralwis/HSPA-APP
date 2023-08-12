import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Property } from '../model/property';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }

  getAllCities(): Observable<string[]>{
    return this.http.get<string[]>(this.baseUrl + '/city/cities');
  }

  getProperty(id: number){
    return this.getAllProperties().pipe(
      map(propertiesArray => {
        //throw new Error('Some error');
        return propertiesArray.find(p => p.Id === id);
      })
    );
  }

  getAllProperties(SellRent?: number): Observable<Property[]>{
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray : Array<Property> =[];
        const jsonData = JSON.stringify(data)
        const tmp: Array<Property> = JSON.parse(jsonData);
        const localProperties = JSON.parse(localStorage.getItem('newProp') || '{}');
        if(localProperties){
          for(const id in localProperties){
            if(SellRent){
              if(localProperties[id].SellRent == SellRent){
                propertiesArray.push(localProperties[id]);
              }
            }else{
              propertiesArray.push(localProperties[id]);
            }
        }
        }


        for(const id in tmp){
          if(SellRent){
            if(tmp[id].SellRent == SellRent){
              propertiesArray.push(tmp[id]);
            }
          }else{
            propertiesArray.push(tmp[id]);
          }
        }
        return propertiesArray;
      })
    )
  }

  addProperty(property: Property){
    let newProp = [property]

    //Add new property in array if newProp already exist in local storage
    if(localStorage.getItem('newProp')){
      newProp = [property,
                  ...JSON.parse(localStorage.getItem('newProp') || '{}')]
    }
    localStorage.setItem('newProp', JSON.stringify(newProp));
  }

  newPropId(){
    if(localStorage.getItem('PID')){
      return +(localStorage.getItem('PID') ?? 0) + 1;
    }else{
      localStorage.setItem('PID','101');
      return 101;
    }
  }
}
