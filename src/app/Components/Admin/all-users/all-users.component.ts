import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';
import { UsersEmails } from 'src/app/Shared Classes and types/usersEmails';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
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
  removeUser(user: number, i: any) {
    console.log(user);
    this.users.removeEmail(user).subscribe();
    this.UsersEmails.splice(i, 1);
  }
  ngOnInit(): void {
    this.users.getAllUsers().subscribe((data) => {
      this.UsersEmails = data;
    });
  }
}
