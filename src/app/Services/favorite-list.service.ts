import { IProdcut } from 'src/app/Shared Classes and types/iprodcut';
import { BehaviorSubject, Observable, observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FavoriteListService {
  favoriteList!: Observable<IProdcut[]>;
  favArr!: any[];
  favProdHolder: Subject<any[]>;
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      accept: '*/*',
    }),
  };
  constructor(private http: HttpClient) {
    this.favProdHolder = new BehaviorSubject([{}]);
  }

  
  accsesFavorite(): Observable<IProdcut[]> {
    this.favoriteList = this.http.get<IProdcut[]>(
      `${environment.apiUrl}/favorite`
    );
    return this.favoriteList;
  }
  addToFav(prd: IProdcut) {
    return this.http.post(
      `${environment.apiUrl}/favorite`,
      prd,
      this.httpOptions
    );
  }
  removeformFav(prdID: number): Observable<{}> {
    return this.http.delete(
      `${environment.apiUrl}/favorite/${prdID}`,
      this.httpOptions
    );
  }
  removeAllformCart(): Observable<{}> {
    console.log(`a ely by7sl `);

    return this.http.delete(`${environment.apiUrl}/favorite`, this.httpOptions);
  }
}
