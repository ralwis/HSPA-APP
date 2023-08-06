import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from 'src/app/model/iproperty';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/model/property';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit{
  SellRent = 1;
  properties: Array<Property> = [];
  Today = new Date();
  City = '';
  SearchCity: any;
  SortbyParam = '';
  SortDirection = 'asc';
  constructor(private route: ActivatedRoute, private housingService: HousingService) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()){
      this.SellRent = 2;
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data=>{
            this.properties = data;
            console.log(data);
          }, error => {
            console.log('httperror');
            console.log(error);
          }
    )
  }

  onCityFilter(){
    this.SearchCity = this.City;
  }

  onCityFilterClear(){
    this.SearchCity = '';
    this.City = '';
  }

  onSortDirection(){
    if(this.SortDirection === 'desc'){
      this.SortDirection = 'asc';
    }else{
      this.SortDirection = 'desc';
    }
  }

}
