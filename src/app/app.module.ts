import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { WeatherComponent } from './component/weather/weather.component';


@NgModule({
  declarations: [
    AppComponent,
		WeatherComponent,
	
  ],
  imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC0ASewGAO45_lcnKbjPvurmuGZAQ41NCY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
