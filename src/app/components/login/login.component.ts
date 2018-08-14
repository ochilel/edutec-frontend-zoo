import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

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
    private router: Router,
    private storage: LocalStorageService,
    private sessionStorage: SessionStorageService,
  ) { 
    this.user = new User('', '', '', '', '', '');
  }

  ngOnInit() {
  }

  onSubmit() {
    this._userService.login(this.user)
      .subscribe(
        response => {
          const token = response['token'];
          this.storage.store('token', token);
          this.sessionStorage.store('tokenSession', token);
          this.router.navigate(['/animals']);
        },
        error => {
          console.log(error);
        }
      );
  }
}
