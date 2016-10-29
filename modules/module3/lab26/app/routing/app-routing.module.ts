import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "../component/home.component";


import {ProductListComponent} from "../component/product-list.component";
import {ProductDetailComponent} from "../component/product-detail.component";

import {LineItemListComponent} from "../component/line-item-list.component";
import {LineItemDetailComponent} from "../component/line-item-detail.component";

import {SalesInvoiceListComponent} from "../component/sales-invoice-list.component";
import {SalesInvoiceDetailComponent} from "../component/sales-invoice-detail.component";

import {CustomerListComponent} from "../component/customer-list.component";
import {CustomerDetailComponent} from "../component/customer-detail.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component:  HomeComponent},
    { path: 'product-list', component: ProductListComponent },
    { path: 'product/detail/:id', component: ProductDetailComponent },
    { path: 'line-item-list', component: LineItemListComponent },
    { path: 'lineItem/detail/:lineNumber', component: LineItemDetailComponent },
    { path: 'sales-invoice-list', component: SalesInvoiceListComponent },
    { path: 'salesInvoice/detail/:id', component: SalesInvoiceDetailComponent },
    { path: 'customer-list', component: CustomerListComponent },
    { path: 'customer/detail/:id', component: CustomerDetailComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}