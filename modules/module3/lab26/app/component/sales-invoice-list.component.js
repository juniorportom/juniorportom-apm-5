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
var sales_invoice_service_1 = require("../service/sales-invoice.service");
var router_1 = require("@angular/router");
var SalesInvoiceListComponent = (function () {
    function SalesInvoiceListComponent(router, salesInvoiceService) {
        this.router = router;
        this.salesInvoiceService = salesInvoiceService;
        this.title = "Lista de facturas";
    }
    SalesInvoiceListComponent.prototype.getSalesInvoices = function () {
        var _this = this;
        this.salesInvoiceService.getSalesInvoices().then(function (salesInvoices) { return _this.salesInvoices = salesInvoices; });
    };
    SalesInvoiceListComponent.prototype.ngOnInit = function () {
        this.getSalesInvoices();
    };
    SalesInvoiceListComponent.prototype.onSelect = function (salesInvoice) {
        this.selected = salesInvoice;
    };
    SalesInvoiceListComponent.prototype.gotoDetail = function () {
        this.router.navigate(['salesInvoice/detail/', this.selected.id]);
    };
    SalesInvoiceListComponent = __decorate([
        core_1.Component({
            selector: 'sales-invoice-list-app',
            templateUrl: 'app/templates/sales-invoice-list.html',
            providers: [sales_invoice_service_1.SalesInvoiceService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, sales_invoice_service_1.SalesInvoiceService])
    ], SalesInvoiceListComponent);
    return SalesInvoiceListComponent;
}());
exports.SalesInvoiceListComponent = SalesInvoiceListComponent;
//# sourceMappingURL=sales-invoice-list.component.js.map