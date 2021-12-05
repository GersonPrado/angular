import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ILoginUserDomain } from 'src/app/Domains/authentication/login-user-domain';
import { IResponseModel } from 'src/app/Models/IResponseModel';
import { HttpCustomClient } from 'src/app/shared/HttpClient/http-custom-client';
import { HTTPURLS } from 'src/app/shared/HttpClient/http-urls.enum';
import { IHttpParam } from '../../shared/HttpClient/http-param';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpCliente: HttpCustomClient ) { }
  private params: IHttpParam[] ;
  userAuthenticated: boolean;
  loginUser(user: ILoginUserDomain) {

    const authenticationCommand = {
      nameUser: user.usuario,
      passwordUser: user.password,
      forgetPassword: false
    }
    return this.httpCliente.Post(HTTPURLS.AUTHENTICATION, authenticationCommand).pipe(map( (res: IResponseModel) => {
      if(!res.success) {
        this.userAuthenticated = false;
      } else {
        this.userAuthenticated = true;
      }
      return res;
    }));
  }

  validAuthenticUser(): boolean {
    return this.userAuthenticated;
  }
}
