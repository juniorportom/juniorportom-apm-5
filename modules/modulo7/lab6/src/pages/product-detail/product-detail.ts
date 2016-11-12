import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Product } from '../../model/product';
import {Service} from "../../providers/service";
import { HomePage } from '../home/home';

/*
  Generated class for the ProductDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
  providers: [Service]
})
export class ProductDetailPage {
	product: Product;

  constructor(public navCtrl: NavController,  private service: Service, private param: NavParams) {}

  ionViewDidLoad() {
    console.log('Hello ProductDetailPage Page');

    let id = this.param.get('id');
            this.service.getProduct(id).subscribe(product=>this.product=product),
                error => {
                console.log(error);
  		}
	}




    save(): void {
        this.service.update(this.product)
            .subscribe(
                response => {console.log(response); this.navCtrl.push(HomePage);},
                err => { console.log(err)});

          
    }

   delete(): void {
        this.service.delete(this.product)
        .subscribe(
                response => {console.log(response); this.navCtrl.push(HomePage);},
                err => { console.log(err)});    
                
    }

}












     
