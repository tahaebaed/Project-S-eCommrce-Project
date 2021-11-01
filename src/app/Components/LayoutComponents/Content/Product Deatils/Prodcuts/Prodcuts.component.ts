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

@Component({
  selector: 'app-Prodcuts',
  templateUrl: './Prodcuts.component.html',
  styleUrls: ['./Prodcuts.component.css'],
})
export class ProdcutsComponent implements OnInit, OnChanges {
  // @Output() prodcutByCatID: number = 0;
  ProdcutsList: IProdcut[] = [];
  constructor(private ProdService: ProdcutService, private _router: Router) {}

  getProductByID(prodID: number) {
    this._router.navigate(['/Products', prodID]);
  }
  // getProductByCatID() {
  //   this.ProdService.getProductByID(this.prodcutByCatID);
  // }
  addToCart(prd: IProdcut) {
    this.ProdService.addToCart(prd).subscribe((data) => console.log(prd));
  }

  ngOnChanges() {
    // this.getProductByCatID();
  }

  ngOnInit() {
    // this.ProdService.getProductByCatID(1).subscri
    this.ProdService.getAllProducts().subscribe(
      (data) => (this.ProdcutsList = data)
    );
  }
}
