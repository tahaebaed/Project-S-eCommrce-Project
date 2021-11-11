import { UsersService } from 'src/app/Services/users.service';
import { ProdcutService } from 'src/app/Services/prodcut.service';
import { IProdcut } from './../../../Shared Classes and types/iprodcut';
import { Component, OnInit } from '@angular/core';
import { UsersEmails } from 'src/app/Shared Classes and types/usersEmails';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  ProductList: IProdcut[] = [];
  UsersEmails: UsersEmails[] = [];

  constructor(private prdList: ProdcutService, private users: UsersService) {}

  ngOnInit(): void {
    this.prdList
      .getAllProducts()
      .subscribe((data) => (this.ProductList = data));
    this.users.getAllUsers().subscribe((data) => {
      this.UsersEmails = data;
    });
  }
}
