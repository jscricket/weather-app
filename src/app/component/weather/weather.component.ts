import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Weather } from '../../shared/weather.model';
import { FormControl, NgForm, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
	weatherColect: Weather[];
	signForm: FormGroup;

	constructor(
		private weatherService: WeatherService
	) { }

	ngOnInit() {
		this.weatherColect = this.weatherService.getWeather();
	}
	
	onSubmit(form: ){
		console.log(form.value)
	}

}
