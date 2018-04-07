import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  loading: boolean;
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    let currentUser = JSON.parse(localStorage.getItem('current-user'));
    if (currentUser) {
      this.usersService.getUser(currentUser.id).subscribe(
        data => {
          let auth_token = data.headers.get('authorization');
          localStorage.setItem('auth-token', auth_token)
          localStorage.setItem('current-user', JSON.stringify(currentUser))
        },
        error => {
          localStorage.removeItem('current-user');
          localStorage.removeItem('auth-token');
        }
      );
    } else {
    }
  }
}
