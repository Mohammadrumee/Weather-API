import { Component } from '@angular/core';
import { Period, Weather } from './interface/weather';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather API Service';

  periods:Period [] | any = [];

  constructor(private apiWeatherService:WeatherService){
    // this.getApiResponse();
  }

   ngOnInit(){
    this.getApiResponse();
  }

  
  getApiResponse(): void {
    this.apiWeatherService.getItems()
    .subscribe((data) => {

      this.periods = [...data.properties.periods];
    
    });
  }

}