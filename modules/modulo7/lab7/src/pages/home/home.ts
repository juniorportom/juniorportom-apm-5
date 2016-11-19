import { Component } from '@angular/core';
import { Product } from '../../model/product';
import {Service} from "../../providers/service";
import { NavController, ModalController, LoadingController } from 'ionic-angular';
import {ProductDetailPage} from '../product-detail/product-detail';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Service]
})
export class HomePage {
	title: string = "Los productos del año";

	selected: Product;

    products: Product[];

  constructor(public navCtrl: NavController, private service: Service, public modalCtrl: ModalController, public loadingCtrl: LoadingController) {
    
  }

  getProducts() {
        this.service.getProducts()
            .subscribe(
            products => {
                this.products = products;
            },

            error => {
                console.log(error);
            }
        );
    }

    ngOnInit(): void {
        this.getProducts();
    }

    onSelect(product: Product){
        this.selected = product;
        //this.navCtrl.push(ProductDetailPage, {id: this.selected.id});

        let modal = this.modalCtrl.create(ProductDetailPage, {id: this.selected.id});
        modal.present();


        let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
        
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.service.create(name)
            .subscribe(product => {
                this.products.push(product);
                this.selected = null;
            });
    }   

    doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    this.getProducts();

    setTimeout(() => {
      console.log('Async operation has ended');

      refresher.complete();

    }, 2000);
  }

    


}


  


