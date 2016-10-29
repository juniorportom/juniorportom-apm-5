import {LineItem} from "../model/line-item";
export class SalesInvoice {
    id: number;
    invoiceAmount: number;
    tax: number;
    lineItem: Array<LineItem>;
}