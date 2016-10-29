import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {PRODUCTS} from '../mock/product-mock';

@Component({
  selector: 'product-app',
  templateUrl: 'app/templates/product-list.html'
})
export class ProductListComponent {
    title: string = "Mis productos";
    selected: Product;
    products: Product[] = PRODUCTS;
    onSelect(product: Product) {
        this.selected = product;
    }
}