import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Weather } from '../../shared/weather.model';

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
	 weatherColect: Weather[];

	 constructor(private weatherService: WeatherService){}

  ngOnInit() {
		this.weatherColect = this.weatherService.getWeather();
	}

	
}
