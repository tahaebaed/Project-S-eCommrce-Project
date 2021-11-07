import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdcutService } from 'src/app/Services/prodcut.service';
import { IProdcut } from 'src/app/Shared Classes and types/iprodcut';
import { FavoriteListService } from 'src/app/Services/favorite-list.service';

@Component({
  selector: 'app-View-Prodcut',
  templateUrl: './View-Prodcut.component.html',
  styleUrls: ['./View-Prodcut.component.css'],
})
export class ViewProdcutComponent implements OnInit {
  prd!: IProdcut;
  constructor(
    private activRoute: ActivatedRoute,
    private ProdService: ProdcutService,
    private http: HttpClient,
    private favServ: FavoriteListService
  ) {}

  buyProduct(prdID: number, prod: IProdcut, amount: number) {
    console.log(prod);
    console.log(this.prd.quantity);
    this.ProdService.purchaseProduct(prdID, prod, amount);
  }
  addToCart(prd: IProdcut) {
    prd.shopCart = !prd.shopCart;
    if (prd.shopCart) {
      this.ProdService.ChangeCartStatus(true, prd.id);
      this.ProdService.addToCart(prd).subscribe((data) => console.log(prd));
      this.ProdService.IncreaseCounter(1);
    } else {
      this.ProdService.ChangeCartStatus(false, prd.id);
      this.ProdService.removeformCart(prd.id).subscribe((data) =>
        console.log(data)
      );
      this.ProdService.DecreaseCounter(1);
    }
  }
  addToFavorite(prd: IProdcut) {
    prd.favState = !prd.favState;
    if (prd.favState) {
      this.favServ.addToFav(prd).subscribe();
      this.ProdService.editProudct(prd.id, prd);
    } else {
      this.ProdService.editProudct(prd.id, prd);
      this.favServ.removeformFav(prd.id).subscribe();
    }
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
    this.ProdService.getProductByID(+prdID).subscribe(
      (data) => (this.prd = data)
    );
  }
}
