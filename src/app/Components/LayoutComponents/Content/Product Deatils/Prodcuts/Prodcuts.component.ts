import { ToastService } from 'angular-toastify';
import { filter } from 'rxjs/operators';
import { CategoryService } from './../../../../../Services/category.service';
import { ProdcutService } from '../../../../../Services/prodcut.service';
import { IProdcut } from 'src/app/Shared Classes and types/iprodcut';
import {
  Component,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Shared Classes and types/icategory';
import { FavoriteListService } from 'src/app/Services/favorite-list.service';
import { AppToastService } from 'src/app/Services/app-toast.service';

@Component({
  selector: 'app-Prodcuts',
  templateUrl: './Prodcuts.component.html',
  styleUrls: ['./Prodcuts.component.css'],
})
export class ProdcutsComponent implements OnInit, OnChanges {
  // @Output() prodcutByCatID: number = 0;
  ProdcutsList: IProdcut[] = [];
  ProdcutsListFiltred: IProdcut[] = [];
  ctgList: ICategory[] = [];
  faveItems: IProdcut[] = [];

  constructor(
    private ProdService: ProdcutService,
    private _router: Router,
    private ctgServ: CategoryService,
    private favServ: FavoriteListService,
    private _toastService: ToastService,
    public toastService: AppToastService
  ) {}

  getProductByID(prodID: number) {
    this._router.navigate(['/Products', prodID]);
  }
  showSuccess() {
    this.toastService.show('I am a success toast', {
      classname: 'bg-success text-light',
      delay: 10000,
    });
  }
  addToCart(prd: IProdcut) {
    prd.shopCart = !prd.shopCart;
    if (prd.shopCart) {
      this.ProdService.ChangeCartStatus(true, prd.id);
      this.ProdService.addToCart(prd).subscribe();
      this.ProdService.IncreaseCounter(1);
    } else {
      this.ProdService.ChangeCartStatus(false, prd.id);
      this.ProdService.removeformCart(prd.id).subscribe();
      this.ProdService.DecreaseCounter(1);
    }
  }

  fliterProduct(ctgId: number) {
    this.ProdService.getAllProducts().subscribe((data) => {
      ctgId
        ? (this.ProdcutsList = data.filter(
            (prd) => prd.categoryid.id === ctgId
          ))
        : (this.ProdcutsList = data);
    });
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

  ngOnChanges() {}
  addInfoToast() {
    this._toastService.info('message');
  }
  ngOnInit() {
    this.ProdService.getAllProducts().subscribe((data) => {
      this.ProdcutsList = data;
    });
    this.ctgServ.getAllCategory().subscribe((data) => (this.ctgList = data));
  }
}
