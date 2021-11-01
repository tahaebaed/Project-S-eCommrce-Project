import { IProdcut } from './../../../Shared Classes and types/iprodcut';
import { ProdcutService } from 'src/app/Services/prodcut.service';
import { Router } from '@angular/router';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { UsersEmails } from 'src/app/Shared Classes and types/usersEmails';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnChanges {
  displayImg: string;
  adminState?: UsersEmails;
  cartItems: IProdcut[] = [];
  constructor(private router: Router, private cartList: ProdcutService) {
    this.displayImg = 'assets/navbarlogo.png';
  }

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
    if (this.adminState?.admin) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('userDetails');
    this.router.navigate(['Login']);
  }
  ngOnInit(): void {
    this.cartList.accsesShoppingCart().subscribe((data) => {
      this.cartItems = data;
      console.log(this.cartList);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log('this changes just happend', changes);
    this.cartList.accsesShoppingCart().subscribe((data) => {
      this.cartItems = data;
      console.log(this.cartList);
    });
  }
}
