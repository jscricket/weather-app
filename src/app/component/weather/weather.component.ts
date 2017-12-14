import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { AgmCoreModule } from '@agm/core';




@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
	 geocoder: void;
	 city: string;
	 title: string = 'My first AGM project';
	 lat: number = 51.678418;
	 lng: number = 7.809007;
//  }

  ngOnInit() {
		// this.geoFindMe()
	}
	
	//  geoFindMe() {
		// var output = document.getElementById("out");
	
		// if (!navigator.geolocation){
		// 	output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
		// 	return;
		// }
	
	// 	function success(position) {
	// 		var lat = position.coords.latitude;
	// 		var lng = position.coords.longitude;
	
	// 		var output = '<p>Latitude is ' + lat + '° <br>Longitude is ' + lng + '°</p>';
	// 		console.log(output);
	
	// 		// var img = new Image();
	// 		// img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
	
	// 		// output.appendChild(img);
	// 	}
	
	// // 	function error() {
	// // 		output.innerHTML = "Unable to retrieve your location";
	// // 	}
	
	// // 	output.innerHTML = "<p>Locating…</p>";
	
	// 	navigator.geolocation.getCurrentPosition(success);
	// }

	
	
// 		if (navigator.geolocation) {
// 			navigator.geolocation.getCurrentPosition(this.successFunction, this.errorFunction);
// 	} 
// 	//Get the latitude and the longitude;
// 	 successFunction(position) {
// 			var lat = position.coords.latitude;
// 			var lng = position.coords.longitude;
// 			codeLatLng(lat, lng)
// 	}
	
// 	 errorFunction(){
// 			alert("Geocoder failed");
// 	}
	
// 		initialize() {
// 			this.geocoder = new google.maps.Geocoder();
	
	
	
// 		}
	
// 		codeLatLng(lat, lng) {
	
// 			var latlng = new google.maps.LatLng(lat, lng);
// 			this.geocoder.geocode({'latLng': latlng}, function(results, status) {
// 				if (status == google.maps.GeocoderStatus.OK) {
// 				console.log(results)
// 					if (results[1]) {
// 					 //formatted address
// 					 alert(results[0].formatted_address)
// 					//find country name
// 							 for (var i=0; i<results[0].address_components.length; i++) {
// 							for (var b=0;b<results[0].address_components[i].types.length;b++) {
	
// 							//there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
// 									if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
// 											//this is the object you are looking for
// 											this.city= results[0].address_components[i];
// 											break;
// 									}
// 							}
// 					}
// 					//city data
// 					alert(this.city.short_name + " " + this.city.long_name)
	
	
// 					} else {
// 						alert("No results found");
// 					}
// 				} else {
// 					alert("Geocoder failed due to: " + status);
// 				}
// 			});
// 		}

}
