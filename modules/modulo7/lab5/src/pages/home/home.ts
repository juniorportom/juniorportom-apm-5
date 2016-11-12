import { Component } from '@angular/core';
import { Product } from '../model/product';
import { NavController } from 'ionic-angular';
import {ListPage} from '../list/list';
import {List2Page} from '../list2/list2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	product : Product =  {
	id: 1,
    name: 'phone 1',
    type: 'pnone',
    quantity: 5,
    price: 500000,
    url: 'wwww.google.com'    
	};

	selected:any = false;

  constructor(public navCtrl: NavController) {
    
  }

    loadInfo() {
  	this.selected = true;
  }

  goList()
  {
  	this.navCtrl.push(ListPage);
  }

  goList2()
  {
  	this.navCtrl.push(List2Page);
  }


}
