import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpInterceptorCustom } from './shared/HttpClient/http-interceptor'
import { HomeModule } from './home/home.module'
import { AuthenticationService } from './services/authentication/authentication.service'
import { AuthGuard } from './guards/auth-guard'
import { RedeModule } from './cadastros/rede/rede.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RedeModule,
    HomeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorCustom, multi: true },
    AuthenticationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
