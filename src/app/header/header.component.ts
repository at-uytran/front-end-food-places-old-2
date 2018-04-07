import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: any;
  loggedIn: boolean;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('current-user'));
    if(this.currentUser){
      this.loggedIn = true;
      console.log("logged in");
    }
    else{
      this.loggedIn = false;
    }
  }

  logout() {
    let user = JSON.parse(localStorage.getItem('current-user'));
    this.usersService.logout(user.id).subscribe(
      data => {
        console.log(data.json());
        localStorage.removeItem('current-user');
        localStorage.removeItem('auth-token');
        this.loggedIn = false;
        document.location.reload();
      }
    )
  }

}
