import { Weather } from "../shared/weather.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class WeatherService {
	changesCityWeatherColect = new Subject<Weather[]>()
	cityWeatherCollection: Weather[] = [
		new Weather('Kyiv', 'Snowy', 5),
		new Weather('Rome', 'Sunny', 12)
	];
	constructor(){

	}

	getWeather(){
		return this.cityWeatherCollection;
	}

	addNewWeatherCity(cityWether: Weather){
		this.cityWeatherCollection.push(cityWether);
	}

	deleteCityWeather(id: number){
		this.cityWeatherCollection.splice(id, 1);
		this.changesCityWeatherColect.next(this.cityWeatherCollection.slice())
	}
}