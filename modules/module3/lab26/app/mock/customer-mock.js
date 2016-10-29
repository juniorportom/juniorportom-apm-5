"use strict";
var sales_invoice_mock_1 = require("../mock/sales-invoice-mock");
exports.CUSTOMERS = [
    {
        id: 252526,
        name: "Reinaldo Portocarrero",
        salesInvoice: [sales_invoice_mock_1.SALESINVOICES[0], sales_invoice_mock_1.SALESINVOICES[1]]
    },
    {
        id: 252526,
        name: "Johana Gallego",
        salesInvoice: [sales_invoice_mock_1.SALESINVOICES[1], sales_invoice_mock_1.SALESINVOICES[2]]
    },
    {
        id: 252526,
        name: "Javier Hernandez",
        salesInvoice: [sales_invoice_mock_1.SALESINVOICES[0], sales_invoice_mock_1.SALESINVOICES[2]]
    }
];
//# sourceMappingURL=customer-mock.js.map