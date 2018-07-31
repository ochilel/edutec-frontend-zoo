import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private textSample = 0;
  private number1 = 0;
  private number2 = 0;

  constructor() { }

  ngOnInit() {
  }

  suma() {
    this.textSample = this.number1 + this.number2;
  }

}
