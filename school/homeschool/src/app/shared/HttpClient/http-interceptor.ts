import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "./../../../environments/environment";

@Injectable()
export class HttpInterceptorCustom implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  const headers = new HttpHeaders({
      'Authorization': '1234567',
      'WEB-API-key': environment.APKIKEY,
      'Content-Type': 'application/json'
  });

  const _url = `${environment.APIURL}${req.url}`;

  const authReq = req.clone({ headers,
                              responseType: "json",
                              url: _url,
                            });
  return next.handle(authReq);
  }
}
