import { Component, OnInit } from '@angular/core';
// import { MapsAPILoader } from '@agm/core';
// import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
	 geocoder: void;
	 city: string;
	 title: string = 'My first AGM project';
	 lat: number = 51.678418;
	 lng: number = 7.809007;
//  }

  ngOnInit() {
	}
	
}
