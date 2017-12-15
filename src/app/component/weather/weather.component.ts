import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Weather } from '../../shared/weather.model';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
	weatherColect: Weather[];
	lat: number;
	lng: number;

	constructor(
		private weatherService: WeatherService,
		private httpService: HttpService
	) { }

	ngOnInit() {
		this.weatherColect = this.weatherService.getWeather();
		this.geoFindMe()
	}

	onSubmit(form: NgForm) {
		this.httpService.searchWeatherbyCityName(form.value.city)
			.subscribe(
			data => {
				const weatherCity = new Weather(data.name, data.weather[0].description, data.main.temp);
				this.weatherService.addNewWeatherCity(weatherCity);
			}
			);
	}


		
		 geoFindMe() {		
			 function success(position) {
				 this.lat = position.coords.latitude;
				 this.lng = position.coords.longitude;
		console.log(this.lat, this.lng)
		
				}
				navigator.geolocation.getCurrentPosition(success)
			}
			

}
