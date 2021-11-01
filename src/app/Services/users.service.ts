import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersEmails } from './../Shared Classes and types/usersEmails';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  emails?: Observable<UsersEmails[]>;
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return (this.emails = this.http.get<UsersEmails[]>(
      `${environment.apiUrl}/users`
    ));
  }
  removeEmail(email: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        accept: '*/*',
      }),
    };

    return this.http.delete(
      `${environment.apiUrl}/users/${email}`,
      httpOptions
    );
  }
  addNewEmail(email: UsersEmails) {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        accept: '*/*',
      }),
    };
   return this.http.post(`${environment.apiUrl}/users`, email, httpOptions);
  }
  getUserByToken(token: string): Observable<UsersEmails> {
    return this.http.get<UsersEmails>(`${environment.apiUrl}/users/${token}`);
  }
}
