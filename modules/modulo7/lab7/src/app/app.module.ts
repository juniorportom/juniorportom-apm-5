import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Service} from "../providers/service";
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { ProductListPage } from '../pages/product-list/product-detail';

import {UserService} from "../providers/user-service";
import { UserListPage } from '../pages/user-list/user-list';
import { UserDetailPage } from '../pages/user-detail/user-detail';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductDetailPage,
    ProductListPage,
    UserDetailPage,
    UserListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductDetailPage,
    ProductListPage,
    UserDetailPage,
    UserListPage
  ],
  providers: [
    Service,
    UserService
    ]
})
export class AppModule {}
