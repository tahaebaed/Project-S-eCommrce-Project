import { environment } from './../../environments/environment';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, throwError } from 'rxjs';
import { catchError, filter, map, reduce, retry } from 'rxjs/operators';
import { IProdcut } from '../Shared Classes and types/iprodcut';

@Injectable({
  providedIn: 'root',
})
export class ProdcutService {
  ProductList!: Observable<IProdcut[]>;
  shoppingCart!: Observable<IProdcut[]>;
  totalPrice!: Observable<number>;
  purchasedItem!: Observable<IProdcut>;
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<IProdcut[]> {
    this.ProductList = this.http.get<IProdcut[]>(
      `${environment.apiUrl}/products`
    );
    return this.ProductList;
  }
  addNewProducts(prd: IProdcut) {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        accept: '*/*',
      }),
    };

    return this.http.post(`${environment.apiUrl}/products`, prd, httpOptions);
  }

  removeProducts(prd: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        accept: '*/*',
      }),
    };

    return this.http.delete(
      `${environment.apiUrl}/products/${prd}`,
      httpOptions
    );
  }

  accsesShoppingCart(): Observable<IProdcut[]> {
    this.shoppingCart = this.http.get<IProdcut[]>(`${environment.apiUrl}/cart`);
    return this.shoppingCart;
  }

  purchaseProduct(prodID: number, prd: IProdcut, amout: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        accept: '*/*',
      }),
    };

    console.log(`${prodID} this prd form patch func ${prd}`);
    const updatedQuantity = {
      quantity: (prd.quantity -= amout),
    };
    this.http
      .patch(
        `${environment.apiUrl}/products/${prodID}`,
        updatedQuantity,
        httpOptions
      )
      .subscribe((res) => console.log(`the response is ${res}`));
  }

  editProudct(prodID: number, prd: IProdcut) {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        accept: '*/*',
      }),
    };

    console.log(`${prodID} this prd form patch func ${prd}`);
    const updatedProduct: IProdcut = prd;

    this.http
      .patch(
        `${environment.apiUrl}/products/${prodID}`,
        updatedProduct,
        httpOptions
      )
      .subscribe((res) => console.log(`the response is ${res}`));
  }

  removeformCart(prdID: number): Observable<{}> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        accept: '*/*',
      }),
    };
    return this.http.delete(`${environment.apiUrl}/cart/${prdID}`, httpOptions);
  }
  removeAllformCart(): Observable<{}> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        accept: '*/*',
      }),
    };
    return this.http.delete(`${environment.apiUrl}/cart/`, httpOptions);
  }

  addToCart(prd: IProdcut) {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        accept: '*/*',
      }),
    };
    return this.http.post(`${environment.apiUrl}/cart`, prd, httpOptions);
  }

  getProductByID(prodID: number): Observable<IProdcut> {
    return this.http.get<IProdcut>(`${environment.apiUrl}/products/${prodID}`);
  }
}
// function forEach(
//   arg0: (prd: any) => any
// ): import('rxjs').OperatorFunction<IProdcut, number> {
//   throw new Error('Function not implemented.');
// }
