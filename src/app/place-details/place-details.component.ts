import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../services/places.service'
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceImagePipe } from '../shared/place-image.pipe'

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {
  place: any;
  id: number;
  sub: any;

  constructor(private placesService: PlacesService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
       this.id = +params['id'];
     });
    this.placesService.show(this.id).subscribe(res=>{
      this.place = res.data.place;
      console.log(res);
      console.log(this.place.descriptions);
    }, error=> {
      console.log("error");
    })
  }

}
