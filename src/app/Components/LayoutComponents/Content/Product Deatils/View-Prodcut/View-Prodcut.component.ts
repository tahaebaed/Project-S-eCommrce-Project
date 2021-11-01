import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdcutService } from 'src/app/Services/prodcut.service';
import { IProdcut } from 'src/app/Shared Classes and types/iprodcut';

@Component({
  selector: 'app-View-Prodcut',
  templateUrl: './View-Prodcut.component.html',
  styleUrls: ['./View-Prodcut.component.css'],
})
export class ViewProdcutComponent implements OnInit {
  prd!: IProdcut;
  constructor(
    private activRoute: ActivatedRoute,
    private prdList: ProdcutService,
    private http: HttpClient
  ) {}

  buyProduct(prdID: number, prod: IProdcut, amount: number) {
    console.log(prod);
    console.log(this.prd.quantity);
    this.prdList.purchaseProduct(prdID, prod, amount);
  }

  ngOnInit() {
    let sendID: number;
    this.activRoute.paramMap.subscribe((params) => {
      sendID = Number(params.get('id'));
      this.getProdcutByID(sendID);
      console.log(sendID);
    });
  }

  private getProdcutByID(prdID: string | number) {
    this.prdList.getProductByID(+prdID).subscribe((data) => (this.prd = data));
  }
}
