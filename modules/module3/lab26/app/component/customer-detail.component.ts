import {Component, OnInit} from '@angular/core';
import { Customer } from '../model/customer';
import {CustomerService} from "../service/customer.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Router} from "@angular/router";


@Component({
    selector: 'customer-detail-app',
    templateUrl: 'app/templates/customer-detail.html',
    providers: [CustomerService]
})

export class CustomerDetailComponent implements OnInit {

    customer: Customer;
    constructor(private router: Router,
        private customerService: CustomerService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.customerService.getCustomer(id)
                .then(customer=> this.customer = customer);
        });
    }

    gotoInvoiceDetail(id:number): void {
        this.router.navigate(['salesInvoice/detail/', id]);
    }
}