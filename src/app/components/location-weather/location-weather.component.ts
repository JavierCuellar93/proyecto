import { Component, Input } from '@angular/core';
import { LocationItem } from '../../models/location-item.model';
import { StorageServiceService } from '../../services/storage-service.service';
import { WeatherServiceService } from '../../services/weather-service.service';

@Component({
  selector: 'app-location-weather',
  imports: [],
  templateUrl: './location-weather.component.html',
  styleUrl: './location-weather.component.css'
})
export class LocationWeatherComponent {
  locations: LocationItem[];
  imageBaseURL!: string;

  lat!: any;
  lon!: any;
  weatherCondition = '';
  temp = '';
  maxTemp = '';
  minTemp = '';
  aux = 'cloudy';
  auxArray: string[] = ['cloudy', 'sunny', 'snowy', 'rainy']
  

  locationResults: any;
  weatherResults: any;

  constructor(private storageService: StorageServiceService, private weatherService: WeatherServiceService) {
    this.locations = storageService.getLocationsList();
  }
    

  ngOnInit() {
    this.locationResults = this.weatherService.getLocationData('64989').subscribe((data => {
      const results = (data.results);
      
      //console.log(results[0].geometry.location);
      const locationData = results[0].geometry.location;
      this.lat = locationData.lat;
      this.lon = locationData.lng;
      
      console.log('RESULTADOS LOC 1:', this.lat, this.lon);
    }))

    console.log('RESULTADOS LOC 2:', this.lat, this.lon);

    this.weatherResults = this.getWeatherResults(this.lat, this.lon).subscribe((data => {
      console.log(data);
    }))
  }

  deleteLocation(location: LocationItem){
    this.storageService.deleteLocation(location);
  }

  getWeatherResults(latValue: string, lonValue: string) {
    return this.weatherService.getWeatherData(latValue, lonValue);
  } 

}
