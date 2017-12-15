import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
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
export class WeatherComponent implements OnInit, AfterViewInit {
	weatherColect: Weather[];
	// lat: number;
	// lng: number;

	constructor(
		private weatherService: WeatherService,
		private httpService: HttpService
	) { }

	ngOnInit() {
		this.weatherColect = this.weatherService.getWeather();
	}
	ngAfterViewInit() {
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

	getCity(lat, lng) {
		this.httpService.searchCurrentCityWeather(lat, lng)
			.subscribe(
				data => {
					console.log(data)
				}
			);
	}

	geoFindMe() {
		function success(position) {
			const lat = position.coords.latitude;
			const lng = position.coords.longitude;
			console.log(lat, lng)
			this.getCity(lat, lng)
		}

		navigator.geolocation.getCurrentPosition(success)
	}

}
