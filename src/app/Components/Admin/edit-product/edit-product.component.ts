import { ProdcutService } from 'src/app/Services/prodcut.service';
import { Component, OnInit } from '@angular/core';
import { IProdcut } from 'src/app/Shared Classes and types/iprodcut';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  submitted = false;
  saved = false;
  status: string = '';
  onSubmit() {
    this.submitted = true;
  }
  EditProduct!: IProdcut;
  constructor(
    private prdServ: ProdcutService,
    private router: Router,
    private activRoute: ActivatedRoute
  ) {
    // this.EditProduct = {
    //   id: 0,
    //   name: 'test',
    //   img: '',
    //   quantity: 0,
    //   neededAmount: 0,
    //   price: 0,
    //   categoryid: { id: 0, name: 'test' },
    // };
  }

  editProduct() {
    this.saved = true;
    this.prdServ.editProudct(this.EditProduct.id, this.EditProduct);
    this.router.navigate(['/Admin/Admin-Panel']);
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
    this.prdServ
      .getProductByID(+prdID)
      .subscribe((data) => (this.EditProduct = data));
  }
}
