import { Component, OnInit } from '@angular/core';
import { login } from 'src/app/pages/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  novoUsuraio: login = new login();
  constructor() {}

  ngOnInit(): void {}
}
