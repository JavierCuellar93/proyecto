import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  private googleKey ='&key=AIzaSyBzB9hhI7-oU9SbkUi7K3kQfer3_vPJucA';
  private googleGeoURL = 'https://maps.googleapis.com/maps/api/geocode/json?address='
  
  private openWeatherAPIURL = 'https://api.openweathermap.org/data/3.0/onecall?';
  private openWeatherKey = '&appid=5a4b2d457ecbef9eb2a71e480b947604';
  private lat = 'lat=';
  private lon = '&lon=';
  private excludeAllButCurrent = '&exclude=minutely,hourly,daily,alerts';

  private baseImageURL = 'https://www.angulartraining.com/images/weather/';
  private imageURL = '';
  
  constructor(private httpClient: HttpClient) { 

  }

  getLocationData(zipCode: string): Observable<any> {
    return this.httpClient.get(this.googleGeoURL + zipCode + this.googleKey);
  }

  getWeatherData(latValue: string, lonValue: string): Observable<any> {
    const request = this.openWeatherAPIURL + this.lat + latValue + this.lon + lonValue + this.excludeAllButCurrent + this.openWeatherKey;
    console.log('REQUEST: ', request);
    return this.httpClient.get(request);
  }

  getWeatherImage(weather: string) {
    switch(weather) {
      case 'sunny': {
        this.imageURL = this.baseImageURL + 'sun.png';
        break;
      }
      case 'snowy': {
        this.imageURL = this.baseImageURL + 'snow.png';
        break;
      }
      case 'cloudy': {
        this.imageURL = this.baseImageURL + 'clouds.png';
        break;
      }
      case 'rainy': {
        this.imageURL = this.baseImageURL + 'rain.png';
        break;
      }
    }
    return this.imageURL;
  }

}
