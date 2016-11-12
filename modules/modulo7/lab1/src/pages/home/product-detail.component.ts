import { Component } from '@angular/core';
import { Product } from '../model/product';
import {ProductService} from "../service/product.service";

import { NavController } from 'ionic-angular';

@Component({
    selector: 'product-detail',
    templateUrl: 'app/templates/product-detail.html',
    providers: [ProductService]
})

export class ProductDetailComponent {
    //@Input()
    product: Product;
   

    constructor( public navCtrl: NavController, private productService: ProductService) {
    
  }

     ngOnInit(): void {
        this.navCtrl..forEach((params: Params) => {
            let id = +params['id'];
            this.productService.getProduct(id).subscribe(product=>this.product=product),
                error => {
                console.log(error);
            }
        });
    }


    //save(): void {
    //    this.productService.update(this.product)
    //        .subscribe(
    //            response => {console.log(response);  this.router.navigate(['product/'])},
    //            err => { console.log(err)});
//
//    //       
//    //}
//
//    //delete(): void {
//    //    this.productService.delete(this.product)
//    //    .subscribe(
//    //            response => {console.log(response); this.router.navigate(['product/'])},
//    //            err => { console.log(err)});    
//    //            this.router.navigate(['product/']);       
    //}
}

