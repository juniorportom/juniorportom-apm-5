import {Customer} from "../model/customer";
import {SALESINVOICES} from "../mock/sales-invoice-mock";

export const CUSTOMERS: Customer[] = [
    {
        id: 252526,
        name: "Reinaldo Portocarrero",
        salesInvoice: [SALESINVOICES[0], SALESINVOICES[1]]
    },
    {
        id: 252526,
        name: "Johana Gallego",
        salesInvoice: [SALESINVOICES[1], SALESINVOICES[2]]
    },
    {
        id: 252526,
        name: "Javier Hernandez",
        salesInvoice: [SALESINVOICES[0], SALESINVOICES[2]]
    }
];

 