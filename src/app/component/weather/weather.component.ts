import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs/Observable';

import { WeatherService } from '../../services/weather.service';
import { Weather } from '../../shared/weather.model';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
	weatherCollect: Weather[];
	myCityWeather: Weather;
	constructor(
		private weatherService: WeatherService,
		private httpService: HttpService
	) { }

	ngOnInit() {
		this.weatherCollect = this.weatherService.getWeather();
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
		form.reset();
	}


	getMyCityWeather(lat, lng) {
		this.httpService.searchCurrentCityWeather(lat, lng)
			.subscribe(
			data => {
				const weatherCurrentCity = new Weather(data.name, data.weather[0].description, data.main.temp);
				this.myCityWeather = weatherCurrentCity;
				console.log(this.myCityWeather)
			}
		);
	}

	geoFindMe() {
		const success = (position) => {
			const lat = position.coords.latitude;
			const lng = position.coords.longitude;
			this.getMyCityWeather(lat, lng)
		}
		navigator.geolocation.getCurrentPosition(success)
	}



}
