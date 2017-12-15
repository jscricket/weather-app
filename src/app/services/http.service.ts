import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/Rx';

export class HttpService{

	constructor(private http: Http){

	}

	searchWeather(cityName: string): Observable<any>{
		return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName
		 + '&APPID=KEY&units=metric')
				 .map(response => response.json())
				 .catch(error => {
					 console.log(error);
					 return Observable.throw(error.json())
				 });
				}
}