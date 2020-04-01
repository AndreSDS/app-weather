import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
    private readonly url:string = 'https://api.openweathermap.org/data/2.5/weather';
    private readonly apkey:string = environment.API_KEY;

  constructor( private http: HttpClient) { }

    getWeatherByCoord(lat, lon){
      const params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('units', 'metric')
      .set('appid', this.apkey);

      return  this.http.get(this.url, { params });
    }
}
