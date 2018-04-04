import { Injectable } from '@angular/core';
import { User } from '../models/user.model'
import { SERVER_URL } from '../config/config'
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class UsersService {
  user: User

  constructor(private http: Http) { }

  login(obj: any) {
    return this.http.post(SERVER_URL + '/sessions', obj).map(res => res.json());
  }

  setHeaders() :any{
    let authorization = localStorage.getItem('auth-token')
    let headers = new Headers();
    headers.append('Authorization', authorization);
    return headers;
  }
}