import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { UserLogin } from '../model/userlogin';
import { ResponseLogin } from '../model/responselogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: String = '';
  loginError: boolean = false;

  constructor(
    private service: LoginService
) { }

  ngOnInit(): void {
  }

  userLogin: UserLogin = {
    emailCustomer: '',
    passwordCustomer: ''
  }

  responseLogin: ResponseLogin = {
    token: '',
    refresh: ''
  }

  onSubmit() {
    this.service.login(this.userLogin).subscribe((response: any) => {
      console.log(response.token)
    });
  }

}
