"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Ride = (function () {
    function Ride() {
    }
    return Ride;
}());
exports.Ride = Ride;
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Ride Taxi";
        this.selected = "";
        this.total = 0;
        this.ride = RIDE;
    }
    AppComponent.prototype.onKey = function (value) {
        this.ride.units = value;
        this.sum();
    };
    AppComponent.prototype.onSelect = function (value) {
        if (value === 1) {
            this.ride.festive = true;
        }
        if (value === 2) {
            this.ride.airport = true;
        }
        if (value === 3) {
            this.ride.app = true;
        }
        if (value === 4) {
            this.ride.pip = true;
        }
        this.sum();
    };
    AppComponent.prototype.sum = function () {
        this.total = 0;
        if (this.ride.units > 50) {
            this.total = (4100 * this.ride.units) / 50;
        }
        else {
            this.total = 4100;
        }
        if (this.ride.festive) {
            this.total = this.total + 1900;
        }
        if (this.ride.airport) {
            this.total = this.total + 3900;
        }
        if (this.ride.app) {
            this.total = this.total + 700;
        }
        if (this.ride.pip) {
            this.total = this.total + 700;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/ride.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var RIDE = {
    units: 50,
    festive: false,
    airport: false,
    app: false,
    pip: false,
    default: false
};
//# sourceMappingURL=app.component.js.map