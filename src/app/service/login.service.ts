import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api_config';
import { ResponseLogin } from '../model/responselogin';
import { UserLogin } from '../model/userlogin';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = API_CONFIG.urlApi;

  constructor(private http: HttpClient) { }

  login(userLogin: UserLogin) {
    return this.http.post<ResponseLogin>(this.url+'/auth/login', userLogin).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("refresh", value.refresh)
      })
    );
  }
}
