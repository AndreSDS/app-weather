import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
    private readonly urlName:string = 'https://api.weatherbit.io/v2.0/current';//weather-api
    private readonly urlTemp: string =  'http://apiadvisor.climatempo.com.br/api/v1/climate/temperature/locale';
    private readonly apkey:string = environment.API_KEY;

    idCidade;

  constructor( private http: HttpClient) { }

    getIdCidade(city:string){
      const params = new HttpParams()
      .set('city', city)
      .set('key', this.apkey)
      .set('units', 'm')
      .set( 'lang', 'pt' )
      
      return this.http.get(this.urlName, { params });
    }
}
