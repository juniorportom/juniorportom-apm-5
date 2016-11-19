import { Component } from '@angular/core';
import { Product } from '../../model/product';
import {ProductService} from "../../providers/product-service";
import { NavController, ModalController, LoadingController, MenuController } from 'ionic-angular';
import {ProductDetail} from '../product-detail/product-detail';

/*
  Generated class for the Products page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
  providers: [ProductService]
})
export class Products {
	title: string = "Los productos del año";

	selected: Product;

    products: Product[];

  constructor(public navCtrl: NavController, private productService: ProductService, public modalCtrl: ModalController, public loadingCtrl: LoadingController, 
    public cntrMenu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('Hello ProductsPage Page');
  }

  getProducts() {
        this.productService.getProducts()
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
        this.navCtrl.push(ProductDetail, {id: this.selected.id});

        //let modal = this.modalCtrl.create(ProductDetail, {id: this.selected.id});
        //modal.present();


        let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
        
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.productService.create(name)
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

  onMenu()
  {
    this.cntrMenu.open();
  }

}





  
    
  
  
    





  


