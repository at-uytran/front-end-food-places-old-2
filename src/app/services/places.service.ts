import { Injectable } from '@angular/core';
import { SERVER_URL } from '../config/config'
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import { Router } from '@angular/router';
import { Place } from '../models/place.model'


@Injectable()
export class PlacesService {
  place: Place;

  constructor(private http: Http) { }

  index() {
    return this.http.get(SERVER_URL+'places').map(res=> res.json());
  }

  show(id) {
    return this.http.get(SERVER_URL+'places/'+id).map(res=> res.json());
  }
}
