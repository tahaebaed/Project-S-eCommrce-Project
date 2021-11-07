import { IProdcut } from 'src/app/Shared Classes and types/iprodcut';
import { FavoriteListService } from './../../../Services/favorite-list.service';

import { ProdcutService } from 'src/app/Services/prodcut.service';
import { Router } from '@angular/router';
import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
  AfterViewInit,
  DoCheck,
} from '@angular/core';
import { UsersEmails } from 'src/app/Shared Classes and types/usersEmails';
import { Subscription } from 'rxjs';
import { IndexKind } from 'typescript';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  displayImg: string;
  adminState?: UsersEmails;
  cartItems: IProdcut[] = [];
  counter!: number;
  public ProductCartItems!: Subscription;
  favProducts: IProdcut[] = [];
  @Input() lengthChange: number = this.cartItems.length;
  constructor(
    private router: Router,
    private cartList: ProdcutService,
    private favServ: FavoriteListService
  ) {
    this.displayImg = 'assets/navbarlogo.png';
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.cartList.accsesShoppingCart().subscribe((data) => {
  //     this.cartItems = data;
  //     console.log(this.cartList);
  //   });
  // }

  loggedstate(): boolean {
    if (
      localStorage.getItem('userDetails') ||
      localStorage.getItem('userDetails') == 'undefined'
    ) {
      return true;
    } else {
      return false;
    }
  }
  loggedAdminstate(): boolean {
    this.adminState = JSON.parse(localStorage.getItem('userDetails')!);
    if (this.adminState) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('userDetails');
    this.router.navigate(['Login']);
  }

  login() {
    this.router.navigate(['/Login']);
  }
  signUp() {
    this.router.navigate(['/Signup']);
  }

  removeFromFave(prdId: number, index: number, prd: IProdcut) {
    prd.favState = false;
    this.cartList.editProudct(prdId, prd);
    this.favServ.removeformFav(prdId).subscribe();
    this.favProducts.splice(index, 1);
  }
  ngOnInit(): void {
    this.cartList.accsesShoppingCart().subscribe((data) => {
      this.cartItems = data;

      console.log(this.cartList);
      this.cartList.IncreaseCounter(data.length);
    });

    this.cartList.cartCounter.subscribe((data) => {
      this.counter = data;
      console.log(`this is the counter ${data}`);
    });

    this.favServ
      .accsesFavorite()
      .subscribe((data) => (this.favProducts = data));
  }
}
