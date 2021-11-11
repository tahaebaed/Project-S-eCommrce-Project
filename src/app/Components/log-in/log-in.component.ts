import { Router } from '@angular/router';
import { UserComponent } from '../JustUser/user/user.component';
import { Observable } from 'rxjs';
import { UsersEmails } from './../../Shared Classes and types/usersEmails';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
// import { Cipher } from 'crypto';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  UsersEmails: UsersEmails[] = [];
  UserLogin?: UsersEmails;
  adminLogin: boolean = false;
  constructor(private users: UsersService, private router: Router) {
    this.UserLogin = {
      id: 1,
      firstName: 'test',
      lastName: 'tester',
      email: 'test@email.com',
      password: 'tester',
      admin: false,
    };
  }

  login(userEmail: string, pw: string): UsersEmails | undefined {
    if (!userEmail && !pw) {
      alert('please enter your email and pw');
    } else {
      this.UserLogin = this.UsersEmails.find(
        (user) => userEmail == user.email && pw == user.password
      );
      localStorage.setItem(
        'userDetails',
        JSON.stringify(this.UserLogin?.admin)
      );
      this.UserLogin
        ? this.router.navigate(['Prodcuts'])
        : alert('you enter a wrong email or password');
    }
    return this.UserLogin;
  }
  loggedstate(): boolean {
    if (
      localStorage.getItem('userDetails') ||
      localStorage.getItem('userDetails') == 'undefined'
    ) {
      return true;
    } else {
      return false;
    }
  }
  logOut() {
    localStorage.clear();
  }
  signUp() {
    this.router.navigateByUrl('/Signup');
  }
  ngOnInit(): void {
    this.users.getAllUsers().subscribe((data) => {
      this.UsersEmails = data;
    });
  }
}
