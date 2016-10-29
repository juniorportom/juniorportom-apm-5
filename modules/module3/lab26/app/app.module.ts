import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './component/app.component';
import {AppRoutingModule} from "./routing/app-routing.module";
import {HomeComponent} from "./component/home.component";
import {APP_BASE_HREF} from "@angular/common";
import {ProductListComponent} from "./component/product-list.component";
import {ProductDetailComponent} from "./component/product-detail.component";
import {LineItemListComponent} from "./component/line-item-list.component";
import {LineItemDetailComponent} from "./component/line-item-detail.component";
import {SalesInvoiceListComponent} from "./component/sales-invoice-list.component";
import {SalesInvoiceDetailComponent} from "./component/sales-invoice-detail.component";
import {CustomerListComponent} from "./component/customer-list.component";
import {CustomerDetailComponent} from "./component/customer-detail.component";


@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      AppRoutingModule
  ],
  declarations: [
      AppComponent,
      HomeComponent,
      ProductListComponent,
      ProductDetailComponent,
      LineItemListComponent,
      LineItemDetailComponent,      
      SalesInvoiceListComponent,
      SalesInvoiceDetailComponent,      
      CustomerListComponent,
      CustomerDetailComponent
  ],
  providers: [
      {
          provide: APP_BASE_HREF, useValue : '/'
      }
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
