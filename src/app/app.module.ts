import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { WeatherComponent } from './component/weather/weather.component';
import { HeaderComponent } from './component/header/header.component';
import { WeatherItemComponent } from './component/weather-item/weather-item.component';
import { WeatherService } from './services/weather.service';
import { HttpService } from './services/http.service';


@NgModule({
  declarations: [
    AppComponent,
		WeatherComponent,
		HeaderComponent,
		WeatherItemComponent,
	
  ],
  imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		HttpModule
	
  ],
  providers: [WeatherService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
