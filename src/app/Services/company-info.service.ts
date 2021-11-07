import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CompanyInfo } from '../Shared Classes and types/CompanyInfo';

@Injectable({
  providedIn: 'root',
})
export class CompanyInfoService {
  constructor(private http: HttpClient) {}
  getCompanyInfo(): Observable<{}> {
    return this.http.get(`${environment.apiUrl}/companyInfo`);
  }
}
