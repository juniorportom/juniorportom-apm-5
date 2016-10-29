import {SalesInvoice} from "../model/sales-invoice";
import {LINEITEMS} from "../mock/line-item-mock";

export const SALESINVOICES: SalesInvoice[] = [
    {
        id: 1000001,
        invoiceAmount: 0,
        tax: 19,
        lineItem: [LINEITEMS[0], LINEITEMS[1]]
    },
    {
        id: 1000002,
        invoiceAmount: 0,
        tax: 19,
        lineItem: [LINEITEMS[2], LINEITEMS[1]]
    },
    {
        id: 1000003,
        invoiceAmount: 0,
        tax: 19,
        lineItem: [LINEITEMS[0], LINEITEMS[2]]
    }
];

