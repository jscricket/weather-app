import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {
	
	constructor(private http: Http) {

	}

	

	searchWeatherbyCityName(cityName: string): Observable<any> {
		return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName
			+ '&APPID=f014f69f2783a7e45491f02df1da4825&units=metric')
			.map(response => response.json())
			.catch(error => {
				console.log(error);
				return Observable.throw(error.json())
			});
	}

	searchCurrentCityWeather(lat, lng): Observable<any> {
		return this.http.get('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng
			+ '&APPID=f014f69f2783a7e45491f02df1da4825&units=metric')
			.map(response => response.json())
			.catch(error => {
				console.log(error);
				return Observable.throw(error.json())
			});
	}

}