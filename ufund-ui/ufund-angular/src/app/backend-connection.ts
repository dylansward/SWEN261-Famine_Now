import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Need } from './needs/need';

@Injectable({
  providedIn: 'root'
})
export class BackendConnection {
  private url = 'http://localhost:8080/cupboard'

  constructor(private http: HttpClient){}
  /** GET needs from the server */
  getNeeds(): Observable<Need[]> {
    return this.http.get<Need[]>(this.url)
  }
}
