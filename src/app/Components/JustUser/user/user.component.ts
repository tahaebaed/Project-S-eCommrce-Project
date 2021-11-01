import { UsersEmails } from '../../../Shared Classes and types/usersEmails';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  UsersEmails: UsersEmails[] = [];
  constructor(private users: UsersService) {}

  ngOnInit(): void {
    this.users.getAllUsers().subscribe((data) => {
      this.UsersEmails = data;
      console.log('this is user data', this.UsersEmails);
    });
  }
}
