import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { IProdcut } from '../Shared Classes and types/iprodcut';
@Injectable({
  providedIn: 'root',
})
export class ProdcutService {
  ProductList!: Observable<IProdcut[]>;
  shoppingCart!: Observable<IProdcut[]>;
  counter: number = 0;
  cartCounter: BehaviorSubject<number>;
  totalPrice!: Observable<number>;
  purchasedItem!: Observable<IProdcut>;

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      accept: '*/*',
    }),
  };
  constructor(private http: HttpClient) {
    this.cartCounter = new BehaviorSubject(0);
  }

  getAllProducts(): Observable<IProdcut[]> {
    this.ProductList = this.http.get<IProdcut[]>(
      `${environment.apiUrl}/products`
    );
    return this.ProductList;
  }
  addNewProducts(prd: IProdcut) {
    return this.http.post(
      `${environment.apiUrl}/products`,
      prd,
      this.httpOptions
    );
  }

  removeProducts(prd: number) {
    return this.http.delete(
      `${environment.apiUrl}/products/${prd}`,
      this.httpOptions
    );
  }

  public accsesShoppingCart(): Observable<IProdcut[]> {
    this.shoppingCart = this.http.get<IProdcut[]>(`${environment.apiUrl}/cart`);
    return this.shoppingCart;
  }

  IncreaseCounter(num: number) {
    this.cartCounter.next((this.counter += num));
  }

  DecreaseCounter(num: number) {
    this.cartCounter.next((this.counter -= num));
  }

  ChangeCartStatus(state: boolean, id: number) {
    const cartState = {
      shopCart: state,
    };

    return this.http
      .patch(
        `${environment.apiUrl}/products/${id}`,
        cartState,
        this.httpOptions
      )
      .subscribe();
  }

  purchaseProduct(prodID: number, prd: IProdcut, amout: number) {
    const updatedQuantity = {
      quantity: (prd.quantity -= amout),
    };
    this.http
      .patch(
        `${environment.apiUrl}/products/${prodID}`,
        updatedQuantity,
        this.httpOptions
      )
      .subscribe();
  }

  editProudct(prodID: number, prd: IProdcut) {
    const updatedProduct: IProdcut = prd;

    this.http
      .patch(
        `${environment.apiUrl}/products/${prodID}`,
        updatedProduct,
        this.httpOptions
      )
      .subscribe();
  }

  removeformCart(prdID: number): Observable<{}> {
    return this.http.delete(
      `${environment.apiUrl}/cart/${prdID}`,
      this.httpOptions
    );
  }

  addToCart(prd: IProdcut) {
    return this.http.post(`${environment.apiUrl}/cart`, prd, this.httpOptions);
  }

  getProductByID(prodID: number): Observable<IProdcut> {
    return this.http.get<IProdcut>(`${environment.apiUrl}/products/${prodID}`);
  }
}
