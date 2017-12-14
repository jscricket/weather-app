import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { WeatherComponent } from './component/weather/weather.component';
import { HeaderComponent } from './component/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
		WeatherComponent,
		HeaderComponent,
	
  ],
  imports: [
		BrowserModule,
		CommonModule,
		FormsModule
		// AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAo1l-p9UldY_oSrkJMtUzKa2_QLdtTnpY'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
