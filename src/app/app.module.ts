import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { WeatherComponent } from './component/weather/weather.component';
import { HeaderComponent } from './component/header/header.component';
import { WeatherItemComponent } from './component/weather-item/weather-item.component';
import { WeatherService } from './services/weather.service';


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
		FormsModule
	
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
