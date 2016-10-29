import {Injectable} from "@angular/core";
import {LINEITEMS} from "../mock/line-item-mock";
import {LineItem} from "../model/line-item";

@Injectable()
export class LineItemService{
    getLineItems(): Promise<LineItem[]>{
        return Promise.resolve(LINEITEMS);
    }

    getLineItem(lineNumber: number): Promise<LineItem> {
    	
        return this.getLineItems()
            .then(lineItems => lineItems.find(lineItem => lineItem.lineNumber === lineNumber));
    }
}