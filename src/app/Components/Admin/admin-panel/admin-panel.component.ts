import { Router } from '@angular/router';
import { IProdcut } from 'src/app/Shared Classes and types/iprodcut';
import { ProdcutService } from 'src/app/Services/prodcut.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  productList: IProdcut[] = [];
  constructor(private prdList: ProdcutService, private _router: Router) {}

  removeItem(prd: number, index: any) {
    this.prdList.removeProducts(prd).subscribe((data) => console.log(data));
    this.productList.splice(index, 1);
  }
  getProductByID(prodID: number) {
    this._router.navigate(['/Admin/Edit-Product/', prodID]);
  }
  ngOnInit(): void {
    this.prdList
      .getAllProducts()
      .subscribe((data) => (this.productList = data));
  }
}
