import { Component } from '@angular/core';
import { Dialogs } from 'ionic-native';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/*
  Generated class for the Page3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {

  data: any = {latitude: '', longitude: ''};

  constructor(public navCtrl: NavController,  public storage: Storage) {
    
  }
    
  loadConfirm() {
  	this.getInfo();
    Dialogs.confirm('Estos son los valores de: Latitud = ' + this.data.latitude + ' y de longitud = ' + this.data.longitude, 'COnfirm', ['Entendido', 'Cancelar'])
      .then((options) => console.log(options), (error) => console.log(error));
  }

  getInfo() {
    this.storage.get("coords").then(res => {
      console.log(res); 
      this.data.latitude = res['latitude']; 
      this.data.longitude = res['longitude']
    });
  }

}
