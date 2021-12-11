import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { ILoginUserDomain } from '../../Domains/authentication/login-user-domain';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { IResponseModel } from '../../Models/IResponseModel';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseFormComponent implements OnInit {

  constructor(  private formBuilder: FormBuilder,
                private authentication: AuthenticationService,
                private router: Router) {
    super();
   }

  loginUserDomain: ILoginUserDomain;
  loginSuccess: boolean;
  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({
      idLogin: [null, Validators.required],
      passwordLogin: [null, Validators.required]
    })
  }

  submit() {
    this.loginUserDomain = {
      password: this.formGroup.controls['passwordLogin'].value,
      usuario : this.formGroup.controls['idLogin'].value,
    }
    this.authentication.loginUser(this.loginUserDomain).subscribe((res) => {
      if(!res.success){
        console.log('Criar Dialog Alert para exibir a mensagem')
      }
      else {
        this.router.navigate(['/home']);
      }
    });
  }

  rememberPassword() {
  }
}
