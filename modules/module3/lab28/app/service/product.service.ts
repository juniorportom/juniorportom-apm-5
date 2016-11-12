import {Injectable} from "@angular/core";
import {Product} from "../model/product";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ProductService {

    private productsURI = 'http://138.68.0.83:7070/api/v1/product/';
    private headers : Headers; //= new Headers({'Content-Type': 'application/json'});
    //private headers : Headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { 
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        //this.headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');

        //this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
        //this.headers.append('Access-Control-Allow-Methods', 'GET');
        //this.headers.append('Access-Control-Allow-Origin', '*');
    }

    //getProducts(): Observable<Product[]> {
    //   return this.http.get(this.productsURI)
    //        .map(response => response.json().data as Product[])
    //        .catch(this.handleError);
    //}


    getProducts(): Observable<Product[]> {
        const url = this.productsURI + 'list';
        return this.http.get(url)
           // .map(response => {response; console.log("Esta es la respuesta: " + response)})
            .map(response => <Product[]>response.json())
            .catch(this.handleError);
    }

    getProduct(id:number): Observable<Product> {
        const url = this.productsURI + 'detail/' + id;
        return this.http.get(url)
           // .map(response => {response; console.log("Esta es la respuesta: " + response)})
            .map(response => <Product>response.json())
            .catch(this.handleError);
    }

    update(product: Product): Observable<Product> {
        const url = this.productsURI + 'update/' + product.id;
        return this.http
            .put(url, JSON.stringify(product), {headers: this.headers})
            .map(() => product)
            .catch(this.handleError);
    }

    //create(name: string): Observable<Product> {
    //    const url = this.productsURI + 'create';
    //    return this.http
    //        .post(url, JSON.stringify({name: name}), {headers: this.headers})
    //        .map(res => <Product>res.json())
    //        .catch(this.handleError);
    //}


    create (name: string): Observable<Product> {
        let toAdd = JSON.stringify({ 'name': name });
        const url = this.productsURI + 'create';
        return this.http.post(url, toAdd, { headers: this.headers })
            .map(response => <Product>response.json())
            .catch(this.handleError);
    }

    delete (product: Product): Observable<any>{
        const url = this.productsURI + 'delete/' + product.id;
        return this.http.delete(url)
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.message || error);
    }
}