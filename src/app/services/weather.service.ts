import { Weather } from "../shared/weather.model";
import { Injectable } from "@angular/core";

@Injectable()
export class WeatherService {
	cityWeatherCollection: Weather[] = [];
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
	}
}