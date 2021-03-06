import { IProdcut } from 'src/app/Shared Classes and types/iprodcut';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProdcutService } from 'src/app/Services/prodcut.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  cartList: IProdcut[] = [];
  public CartProductList!: Subscription;
  totoQantity: number[] = [];
  totalPrice: number[] = [];
  finalTotalPrice: any;
  added: boolean = false;

  constructor(private ProdService: ProdcutService, private _router: Router) {}

  addToCart(prd: IProdcut) {
    this.ProdService.addToCart(prd).subscribe((data) => console.log(prd));
    this.ProdService.accsesShoppingCart().subscribe((data) => {
      this.cartList = data;
      console.log(`this ${this.cartList} has benn add to this.cartList`);
    });
  }

  calcauteTotal() {
    this.finalTotalPrice = 0;
    console.log('this item form calcTotal', this.cartList);
    this.cartList.forEach(
      (prd) => (this.finalTotalPrice += prd.price * prd.neededAmount)
    );

    return this.finalTotalPrice;
  }

  reomveItem(prdID: number, i: any) {
    this.ProdService.removeformCart(prdID).subscribe();
    this.ProdService.DecreaseCounter(1);
    this.cartList.splice(i, 1);
    if (this.cartList.length > 0) {
      this.cartList.forEach(
        (prd) => (this.finalTotalPrice = prd.price * prd.neededAmount)
      );
    } else {
      this.finalTotalPrice = 0;
    }
  }

  buyProducts() {
    this.cartList.forEach((prod, i) => {
      this.ProdService.purchaseProduct(prod.id, prod, prod.neededAmount);
    });
  }

  ngOnInit(): void {
    this.finalTotalPrice = 0;
    this.CartProductList = this.ProdService.accsesShoppingCart().subscribe(
      (data) => {
        this.cartList = data;
      }
    );
  }
}
