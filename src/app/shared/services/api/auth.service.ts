import { LStorageService } from '../storage/l-storage.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {


  constructor(http: HttpClient, lStorage: LStorageService) {
    super(http, lStorage);
    this.setAPIuri('http://localhost:3000');
  }

  singIn({email, password}) {
    return this.post('users/login', {email, password}).then(response => {
      this.lStorage.set('user', response['user']);
      return Promise.resolve(true);
    }).catch(err => {
      console.log('AuthService -> singIn -> err', {err});
      return Promise.reject(false);
    });
  }

  singUp({email, password}) {
    return this.post('users', {email, password}).then(response => {
      // for auto-login
      this.lStorage.set('user', response['user']);
      return Promise.resolve(true);
    }).catch(err => {
      console.log('AuthService -> singUp -> err', {err});
      return Promise.reject(false);
    });
  }
}
