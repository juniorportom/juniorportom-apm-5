import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "../component/home.component";
import {ProductListComponent} from "../component/product-list.component";
import {UserListComponent} from "../component/user-list.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component:  HomeComponent},
    { path: 'product-list', component: ProductListComponent },
    { path: 'user-list', component: UserListComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}