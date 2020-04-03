import { WeatherService } from './../weather.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent implements OnInit, OnDestroy {

  city;
  weather;

  iconImg;
  nameCity;
  cityUf;
  tempCity;
  description;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
   
  }

  ngOnDestroy() {
    
  }

  getCity() {
    this.weatherService.getIdCidade(this.city).pipe(
      take(1)
    ).subscribe(data=>{
      this.weather = data;
      this.nameCity = this.weather.data[0].city_name;
      this.tempCity = this.weather.data[0].temp;
      this.description = this.weather.data[0].weather.description;
      this.cityUf = this.weather.data[0].country_code;
      const icon = this.weather.data[0].weather.icon;
      this.iconImg = 'https://www.weatherbit.io/static/img/icons/'+ icon +'.png';
      console.log(this.weather);
    });
  }
}
