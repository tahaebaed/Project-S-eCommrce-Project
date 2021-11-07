import { ToastService } from 'angular-toastify';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private _toastService: ToastService) {}
  addInfoToast() {
    this._toastService.info('message');
  }
  ngOnInit(): void {}
}
