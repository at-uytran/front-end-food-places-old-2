import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-specs',
  templateUrl: './place-specs.component.html',
  styleUrls: ['./place-specs.component.css']
})
export class PlaceSpecsComponent implements OnInit {

  lat: number;
  lng: number;

  constructor() { }

  ngOnInit() {
    this.lat = 51.678418;
    this.lng = 7.809007;
  }

}
