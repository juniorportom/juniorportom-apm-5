import {Component, OnInit} from '@angular/core';
import { SalesInvoice } from '../model/sales-invoice';
import {SalesInvoiceService} from "../service/sales-invoice.service";
import {Router} from "@angular/router";

@Component({
    selector: 'sales-invoice-list-app',
    templateUrl: 'app/templates/sales-invoice-list.html',
    providers: [SalesInvoiceService]
})
export class SalesInvoiceListComponent implements OnInit {
    title: string = "Lista de facturas";

    selected: SalesInvoice;

    salesInvoices: SalesInvoice[];

    constructor(private router: Router, private salesInvoiceService: SalesInvoiceService) {

    }

    getSalesInvoices() {
        this.salesInvoiceService.getSalesInvoices().then(salesInvoices => this.salesInvoices = salesInvoices);
    }

    ngOnInit(): void {
        this.getSalesInvoices();
    }

    onSelect(salesInvoice: SalesInvoice){
        this.selected = salesInvoice;
    }

    gotoDetail(): void {
        this.router.navigate(['salesInvoice/detail/', this.selected.id]);
    }
}
