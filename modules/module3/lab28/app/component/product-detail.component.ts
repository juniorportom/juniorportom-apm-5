
import {Component, OnInit} from '@angular/core';
//import { Component, Input } from '@angular/core';
import { Product } from '../model/product';
import {ProductService} from "../service/product.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Router} from "@angular/router";

@Component({
    selector: 'product-detail',
    templateUrl: 'app/templates/product-detail.html',
    providers: [ProductService]
})

export class ProductDetailComponent implements OnInit{
    //@Input()
    product: Product;

    constructor(private router: Router, private productService: ProductService,
        private route: ActivatedRoute){
        //private productService: ProductService,        

    }

     ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.productService.getProduct(id).subscribe(product=>this.product=product),
                error => {
                console.log(error);
            }
        });
    }


    save(): void {
        this.productService.update(this.product)
            .subscribe(
                response => {console.log(response);  this.router.navigate(['product/'])},
                err => { console.log(err)});

           
    }

    delete(): void {
        this.productService.delete(this.product)
        .subscribe(
                response => {console.log(response); this.router.navigate(['product/'])},
                err => { console.log(err)});    
                this.router.navigate(['product/']);       
    }
}

