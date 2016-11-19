var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
  Generated class for the Page5 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var Page5Page = (function () {
    function Page5Page(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Page5Page.prototype.ionViewDidLoad = function () {
        console.log('Hello Page5Page Page');
    };
    Page5Page = __decorate([
        Component({
            selector: 'page-page5',
            templateUrl: 'page5.html'
        }), 
        __metadata('design:paramtypes', [NavController])
    ], Page5Page);
    return Page5Page;
}());
//# sourceMappingURL=page5.js.map