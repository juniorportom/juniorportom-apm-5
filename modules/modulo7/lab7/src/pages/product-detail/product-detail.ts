import { Component } from '@angular/core';
import { Product } from '../../model/product';
import {Service} from "../../providers/service";
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { NavController, ModalController, ViewController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController,  private service: Service, private param: NavParams, public alertCtrl: AlertController, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello ProductDetailPage Page');

    let id = this.param.get('id');
            this.service.getProduct(id).subscribe(product=>this.product=product),
                error => {
                console.log(error);
  		}
	}




    save(): void {
      let prompt = this.alertCtrl.create({
      title: 'Confirm Update',
      message: "Do you want to update de data of this product?",
     // inputs: [
     //   {
     //     name: 'title',
     //     placeholder: 'Title'
     //   },
     // ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Accept',
          handler: data => {

            this.service.update(this.product)
            .subscribe(
                response => {console.log(response);
                  this.viewCtrl.dismiss(); 
                  //this.navCtrl.push(HomePage);
                  
                },
                err => { console.log(err)});
            console.log('Accept clicked');
            //this.viewCtrl.dismiss(); 
          }

        }

      ]
    });
    prompt.present();        

    }

   delete(): void {
      let prompt = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: "Do you want to delete this product?",
     // inputs: [
     //   {
     //     name: 'title',
     //     placeholder: 'Title'
     //   },
     // ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Accept',
          handler: data => {

            this.service.delete(this.product)
            .subscribe(
                response => {console.log(response); 
                  this.viewCtrl.dismiss();
                  //this.navCtrl.push(HomePage);  
                                  
                },
                err => { console.log(err)});
            console.log('Accept clicked');
          }
        }
      ]
    });
    prompt.present();

    }

    dismiss() {
    this.viewCtrl.dismiss();
  }
}

