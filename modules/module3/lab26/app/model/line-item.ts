import {Product} from "../model/product";
export class LineItem {
    lineNumber: number;
    purchasePrice: number;
    product: Array<Product>;
}