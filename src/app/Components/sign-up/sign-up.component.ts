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
    // this.UsersEmails.forEach((email) => {
    //   if (userEmail === email.email) {
    //     alert(`this ${userEmail} is token please Enter a new one`);
    //   } else {
    //     this.users.addNewEmail(user).subscribe((data) => {
    //       console.log(data);
    //       this.router.navigate(['/Login']);
    //     });
    //     console.log('this user has been added');
    //   }
    // });
    if (this.UsersEmails.includes(user)) {
      this.users.addNewEmail(user).subscribe((data) => {
        console.log(data);
        this.router.navigate(['/Login']);
      });
      console.log('this user has been added');
    } else {
      alert(`this ${userEmail} is token please Enter a new one`);
    }
  }

  // addNewUser(user: UsersEmails) {
  //   console.log(user);

  //   this.users.addNewEmail(user).subscribe((data) => {
  //     console.log(data);
  //     this.router.navigate(['/Login']);
  //   });
  //   alert('this user has been added');
  // }

  ngOnInit(): void {
    this.users.getAllUsers().subscribe((data) => (this.UsersEmails = data));
  }
}
