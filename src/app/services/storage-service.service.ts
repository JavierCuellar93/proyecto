import { Injectable } from '@angular/core';
import { LocationItem } from '../models/location-item.model';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  private locations: LocationItem[] = [];
  private key = 'locations';

  constructor() { 
    this.locations = this.retrieveArray(this.key);
  }

  getLocationsList() {
    return this.locations;
  }

  addLocation(location: LocationItem) {
    this.locations.push(location);
    this.saveArray(this.key)
  }

  deleteLocation(location: LocationItem) {
    const index = this.locations.indexOf(location);
    this.locations.splice(index, 1);
    this.saveArray(this.key);
  }

  saveArray(key:string){
    localStorage.setItem(key, JSON.stringify(this.locations));
  }

  retrieveArray(key: string) {
    return this.locations = JSON.parse(localStorage.getItem(key) || '[]') as LocationItem[];
  }

  saveData(key: string, value:string) {
    localStorage.setItem(key,value);
  }

  getData(key:string){
    return localStorage.getItem(key);
  }

  removeData(key:string){
    localStorage.removeItem(key);
  }

  clearData() {
    localStorage.clear();
  }

}
