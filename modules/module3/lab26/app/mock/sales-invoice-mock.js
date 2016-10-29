"use strict";
var line_item_mock_1 = require("../mock/line-item-mock");
exports.SALESINVOICES = [
    {
        id: 1000001,
        invoiceAmount: 0,
        tax: 19,
        lineItem: [line_item_mock_1.LINEITEMS[0], line_item_mock_1.LINEITEMS[1]]
    },
    {
        id: 1000002,
        invoiceAmount: 0,
        tax: 19,
        lineItem: [line_item_mock_1.LINEITEMS[2], line_item_mock_1.LINEITEMS[1]]
    },
    {
        id: 1000003,
        invoiceAmount: 0,
        tax: 19,
        lineItem: [line_item_mock_1.LINEITEMS[0], line_item_mock_1.LINEITEMS[2]]
    }
];
//# sourceMappingURL=sales-invoice-mock.js.map