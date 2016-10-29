import {Component, OnInit} from '@angular/core';
import { LineItem } from '../model/line-item';
import {LineItemService} from "../service/line-item.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'line-item-detail-app',
    templateUrl: 'app/templates/line-item-detail.html',
    providers: [LineItemService]
})

export class LineItemDetailComponent implements OnInit {

    lineItem: LineItem;
    constructor(
        private lineItemService: LineItemService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let lineNumber = +params['lineNumber'];
            this.lineItemService.getLineItem(lineNumber)
                .then(lineItem => this.lineItem = lineItem);
        });
    }
}