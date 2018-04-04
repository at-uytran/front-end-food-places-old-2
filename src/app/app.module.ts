import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// import service
import { UsersService } from './services/users.service';

//import router AppRoutingModule
import { AppRoutingModule } from './app-routing.module';
import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchingComponent } from './searching/searching.component';
import { StaticPageComponent } from './static-page/static-page.component';
import { LoginComponent } from './login/login.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchingComponent,
    StaticPageComponent,
    LoginComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CookieModule.forRoot()
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
