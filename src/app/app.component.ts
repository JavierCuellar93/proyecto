import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocationFormComponent } from "./components/location-form/location-form.component";
import { LocationWeatherComponent } from "./components/location-weather/location-weather.component";

@Component({
  selector: 'app-root',
  imports: [LocationFormComponent, LocationWeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto';
  locationZipCode!: string;

  receiveZipCode(zipCode: string) {
    this.locationZipCode = zipCode;
  }

}
