"use strict";
var product_mock_1 = require("../mock/product-mock");
exports.LINEITEMS = [
    {
        lineNumber: 102030,
        purchasePrice: 50000,
        product: [product_mock_1.PRODUCTS[0], product_mock_1.PRODUCTS[1]]
    },
    {
        lineNumber: 204060,
        purchasePrice: 25000,
        product: [product_mock_1.PRODUCTS[1], product_mock_1.PRODUCTS[2]]
    },
    {
        lineNumber: 306090,
        purchasePrice: 150000,
        product: [product_mock_1.PRODUCTS[0], product_mock_1.PRODUCTS[2]]
    }
];
//# sourceMappingURL=line-item-mock.js.map