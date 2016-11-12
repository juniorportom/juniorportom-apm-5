import {Component, OnInit} from '@angular/core';
//import { Component } from '@angular/core';
import { Product } from '../model/product';
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";


@Component({
    selector: 'product-app',
    templateUrl: 'app/templates/product-list.html',
    providers: [ProductService]
})
export class ProductComponent implements OnInit {
    title: string = "los productos del Año";

    selected: Product;

    products: Product[];

    constructor(private router: Router, private productService: ProductService) {

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
        this.router.navigate(['product/detail/', this.selected.id]);
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
    
}