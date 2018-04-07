import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  places: any;

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.placesService.index().subscribe(res =>{
      console.log(res);
      this.places = res.data.places;
    }, error =>{

    });
  }

}
