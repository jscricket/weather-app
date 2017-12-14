export class Weather {
	public cityName: string;
	public description: string;
	public temperature: number;

	constructor(cityName: string, descrip: string, temp: number ){
		this.cityName = cityName;
		this.description = descrip;
		this.temperature = temp;
	}

}