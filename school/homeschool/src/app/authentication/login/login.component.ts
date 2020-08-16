import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms" 
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    super();
   }

  ngOnInit(): void {    
    this.formGroup = this.formBuilder.group({
      idLogin: [null, Validators.required],
      passwordLogin: [null, Validators.required]
    })
  }

  submit() {
    console.log(this.formGroup.value)
  }
  rememberPassword() {
    
  }
}
