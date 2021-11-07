import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../Shared Classes and types/icategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  ctgList!: ICategory[];
  constructor(private http: HttpClient) {}

  getAllCategory(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${environment.apiUrl}/category`);
  }
}
