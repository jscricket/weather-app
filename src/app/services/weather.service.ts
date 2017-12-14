import { Weather } from "../shared/weather.model";

export class WeatherService {
	cityWeatherCollection: Weather[] = [
		new Weather('Kyiv', 'Snowy', 5),
		new Weather('Rome', 'Sunny', 12)
	];
	constructor(){

	}

	getWeather(){
		return this.cityWeatherCollection;
	}
}