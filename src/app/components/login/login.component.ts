import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    UserService
  ]
})
export class LoginComponent implements OnInit {

  public user: User;

  constructor(
    private _userService: UserService,
  ) { 
    this.user = new User('', '', '', '', '', '');
  }

  ngOnInit() {
  }

  onSubmit() {
    this._userService.login(this.user)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }
}
