import { Component } from '@angular/core';
import { Product } from '../../model/product';
import {Service} from "../../providers/service";
import { NavController } from 'ionic-angular';
import {ProductDetailPage} from '../product-detail/product-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Service]
})
export class HomePage {
	title: string = "los productos del Año";

	selected: Product;

    products: Product[];

  constructor(public navCtrl: NavController, private service: Service) {
    
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
        this.navCtrl.push(ProductDetailPage, {id: this.selected.id});
        
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

}


  


