import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],
})
export class HomeComponent implements OnInit {
  storeLogo: string;
  storeName: string;
  constructor(private router: Router) {
    this.storeName = 'PROJECT S';
    this.storeLogo = 'assets/mainlogo.png';
  }
  login() {
    this.router.navigate(['/Login']);
  }
  signUp() {
    this.router.navigate(['/Signup']);
  }
  ngOnInit() {}
}
