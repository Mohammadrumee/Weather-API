import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weather } from '../interface/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient:HttpClient) { }

  getItems() : Observable<Weather>{
    var returnVar = (this.httpClient.get<Weather>(environment.apiEndpoint));

    return returnVar;
  }
}
