import { Component, EventEmitter, Output } from '@angular/core';
import { WeatherServiceService } from '../../services/weather-service.service';
import { LocationItem } from '../../models/location-item.model';
import { StorageServiceService } from '../../services/storage-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-location-form',
  imports: [FormsModule],
  templateUrl: './location-form.component.html',
  styleUrl: './location-form.component.css'
})
export class LocationFormComponent {

  locations: LocationItem[] = [];
  zipCode: string = '';

  subs: any;

  constructor(private storageService: StorageServiceService, private weatherService: WeatherServiceService){
    this.locations = this.storageService.getLocationsList();
  }

  addLocation() {
    //TODO: Agregar if que cheque que no exista elemento
    this.storageService.addLocation(
      new LocationItem(this.zipCode, '0', '0')
    );
    this.zipCode = '';
  }

  ngOnDestroy() {
    this.subs.unsubscribe;
  }

}
