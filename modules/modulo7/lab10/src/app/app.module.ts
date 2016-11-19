import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Home } from '../pages/home/home';
import { Products } from '../pages/products/products';
import { ProductDetail } from '../pages/product-detail/product-detail';
import { Users } from '../pages/users/users';
import { UserDetail } from '../pages/user-detail/user-detail';
import {UserService} from "../providers/user-service";
import {ProductService} from "../providers/product-service";

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Home,
    Products,
    Users,
    ProductDetail,
    UserDetail
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Home,
    Products,
    Users,
    ProductDetail,
    UserDetail
  ],
  providers: [
    UserService,
    ProductService
  ]
})
export class AppModule {}
