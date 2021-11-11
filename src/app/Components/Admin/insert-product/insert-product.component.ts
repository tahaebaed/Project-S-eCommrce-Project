import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdcutService } from 'src/app/Services/prodcut.service';
import { IProdcut } from 'src/app/Shared Classes and types/iprodcut';

@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css'],
})
export class InsertProductComponent implements OnInit {
  submitted = false;
  saved = false;
  status: string = '';

  // reset() {
  //   this.newProduct = new Product();
  // }

  onSubmit() {
    this.submitted = true;
  }
  newProduct: IProdcut;
  constructor(private prdServ: ProdcutService, private router: Router) {
    this.newProduct = {
      id: Math.floor(Math.random() * 9999 + 1),
      name: 'test',
      img: '',
      quantity: 0,
      neededAmount: 0,
      price: 0,
      categoryid: { id: 0, name: 'test' },
      shopCart: false,
      favState: false,
    };
  }

  addProduct() {
    this.saved = true;
    this.prdServ.addNewProducts(this.newProduct).subscribe((data) => {
      this.router.navigate(['/Admin/Admin-Panel']);
    });
  }

  ngOnInit(): void {}
}
