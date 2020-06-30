import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // custom method to initialize reqOpts
  public _initializeReqOpts(reqOpts) {
    if (!reqOpts) {
      reqOpts = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Token ${this.lStorage.getToken()}`
        }),
        params: new HttpParams()
      };
    }
    return reqOpts;
  }
}
