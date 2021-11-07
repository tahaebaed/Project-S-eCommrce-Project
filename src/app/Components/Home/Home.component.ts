import { ProdcutService } from 'src/app/Services/prodcut.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IProdcut } from 'src/app/Shared Classes and types/iprodcut';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],
})
export class HomeComponent implements OnInit {
  storeLogo: string;
  storeName: string;
  prdList!: IProdcut[];

  constructor(private prdServ: ProdcutService, private router: Router) {
    this.storeName = 'PROJECT S';
    this.storeLogo = 'assets/mainlogo.png';
  }

  ngOnInit() {
    this.prdServ.getAllProducts().subscribe((data) => (this.prdList = data));
    console.log(this.prdList);
  }
}
