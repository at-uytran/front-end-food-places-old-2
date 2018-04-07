import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }          from './app.component';
import { LoginComponent }   from './login/login.component';
import { StaticPageComponent }     from './static-page/static-page.component';
import { PlacesComponent }     from './places/places.component';
import { PlaceDetailsComponent }     from './place-details/place-details.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'place/:id', component: PlaceDetailsComponent },
  { path: 'home', component: StaticPageComponent },
  { path: '**', component: StaticPageComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
