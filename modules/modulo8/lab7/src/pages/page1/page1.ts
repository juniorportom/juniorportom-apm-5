import { Component } from '@angular/core';
import {Geolocation} from 'ionic-native';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
	private setDataCoords: any = {latitude: '', longitude: ''};
  	data: any = {latitude: '', longitude: ''};


  constructor(public navCtrl: NavController, public storage: Storage) {
    
  }

  ngOnInit() {
    Geolocation.getCurrentPosition({enableHighAccuracy:true, timeout:2000, maximumAge:5000}).then(resp => {

      this.setDataCoords.latitude = resp.coords.latitude;
      this.setDataCoords.longitude = resp.coords.longitude;
      console.log('Latitude= ' + resp.coords.latitude);
      console.log('longitude= ' + resp.coords.longitude);
      this.storage.set("coords", this.setDataCoords);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getInfo() {
    this.storage.get("coords").then(res => {
    	console.log(res); 
    	this.data['latitude'] = res['latitude']; 
    	this.data['longitude'] = res['longitude']
    });
  }

}


