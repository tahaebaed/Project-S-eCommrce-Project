import { LogInComponent } from './../log-in/log-in.component';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';
import { Component, OnInit } from '@angular/core';
import { UsersEmails } from 'src/app/Shared Classes and types/usersEmails';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  UsersEmails: UsersEmails[] = [];
  newUser: UsersEmails;
  userCheck: any;
  constructor(
    private users: UsersService,
    private router: Router // private f: NgForm
  ) {
    this.newUser = {
      id: Math.floor(Math.random() * 9999 + 1),
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      admin: false,
    };
  }

  emailCheck(userEmail: string, user: UsersEmails) {
    this.userCheck = this.UsersEmails.filter((usr) => {
      return usr.email === userEmail;
    }).some((usr1) => usr1.email === userEmail);

    if (!this.userCheck) {
      this.users.addNewEmail(user).subscribe((data) => {
        this.router.navigate(['/Login']);
      });
    } else {
      alert(`this ${userEmail} is token please Enter a new one`);
    }
  }

  ngOnInit(): void {
    this.users.getAllUsers().subscribe((data) => (this.UsersEmails = data));
  }
}
