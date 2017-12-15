import { Component, OnInit, Input } from '@angular/core';

import { Weather } from '../../shared/weather.model';
import { WeatherService } from '../../services/weather.service';

@Component({
	selector: 'app-weather-item',
	templateUrl: './weather-item.component.html',
	styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {
	@Input() weather: Weather;
	@Input() index: number;


	constructor(private weatherService: WeatherService) { }

	ngOnInit() {
	}

	onDeleteItemWeather(){
		this.weatherService.deleteCityWeather(this.index);
	}

}
