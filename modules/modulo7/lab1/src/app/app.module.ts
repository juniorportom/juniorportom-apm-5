import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ProductService} from "../pages/service/product.service";
import { ProductDetailComponent } from '../pages/component/product-detail.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductDetailComponent,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [ProductService]
})
export class AppModule {}
