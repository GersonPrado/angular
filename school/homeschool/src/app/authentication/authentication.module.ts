import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication.routing.module';
import { SharedModule } from '../shared/shared.module';

/*
* Módulo de funcionalidades
*/
@NgModule({
    declarations: [ LoginComponent ],
    imports: [  
                SharedModule,
                CommonModule, 
                FormsModule,
                ReactiveFormsModule,
                AuthenticationRoutingModule ],
    exports: [],
    providers: [ ],
})
export class AutheticationModule { }
