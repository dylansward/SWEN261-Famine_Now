import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Need } from './need';

@Injectable({
  providedIn: 'root'
})
export class BackendConnection {
  private needURL = 'http://localhost:8080/cupboard'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient){}
  /** GET needs from the server */
  getNeeds(): Observable<Need[]> {
    return this.http.get<Need[]>(this.needURL);
  }

  /** POST: add new need to server */
  addNeed(need: Need): Observable<Need> {
    return this.http.post<Need>(this.needURL, need, this.httpOptions);
  }
  /** PUT: update need on server */
  getNeed(id: number): Observable<Need> {
    const url = `${this.needURL}/${id}`;
    return this.http.get<Need>(url);
  }

  updateNeed(need: Need): Observable<any> {
    return this.http.put(this.needURL, need, this.httpOptions);
  }

  deleteNeed(id: number): Observable<Need> {
    const url = `${this.needURL}/${id}`;

    return this.http.delete<Need>(url, this.httpOptions);
  }

  searchNeeds(term: string): Observable<Need[]> {
    if(!term.trim()) {
      return this.getNeeds();
    }
    return this.http.get<Need[]>(`${this.needURL}/?name=${term}`);
  }
}
