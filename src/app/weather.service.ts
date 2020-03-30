import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apkey:string = environment.API_KEY;
  private readonly url:string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor( private http: HttpClient) { }

    getWeatherByCoord(lat, lon){
      const params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('units', 'metrics')
      .set('appid', this.apkey);

      return  this.http.get(this.url, { params });
      
    }
}
