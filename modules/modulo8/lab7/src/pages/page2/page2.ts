import { Component } from '@angular/core';
import { Dialogs } from 'ionic-native';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {  
  data: any = {latitude: '', longitude: ''};

  constructor(public navCtrl: NavController,  public storage: Storage) {
    this.storage.get("coords").then(res => {
      console.log(res); 
      this.data.latitude = res['latitude']; 
      this.data.longitude = res['longitude']
    });
    
  }

  loadAlert() {
    //this.getInfo();
    Dialogs.alert('Estos son los valores de: Latitud = ' + this.data.latitude + ' y de longitud = ' + this.data.longitude, 'Alert!', 'Entendido');
  }

  
  //getInfo() {
  //  this.storage.get("coords").then(res => {
  //    console.log(res); 
  //    this.data.latitude = res['latitude']; 
  //    this.data.longitude = res['longitude']
  //  });
  //}


}


