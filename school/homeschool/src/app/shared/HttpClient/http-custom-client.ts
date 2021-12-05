import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { __param } from "tslib";
import { IHttpParam } from "./http-param";
import { HTTPURLS } from './http-urls.enum';
import { IResponseModel } from "src/app/Models/IResponseModel";
@Injectable({
  providedIn: 'root'
})
export class HttpCustomClient {

  constructor(private http: HttpClient ) {
  }

  private headers = new HttpHeaders;
  private params= new HttpParams();

  Get(url:HTTPURLS, _params?: IHttpParam[] ) {
    this.setParams(_params);
    return this.http.get(url, {params: this.params});
  }

  Post(url:HTTPURLS, domain: any, _params?: IHttpParam[]) {
    this.setParams(_params);
    return this.http.post<IResponseModel>(url, domain);
  }

  Put(url:HTTPURLS, _params?: IHttpParam[]) {

  }

  Delete(url:HTTPURLS, idDelete: number) {

  }

  private setHttpHeaders(_params?: IHttpParam[]) {
    _params.forEach( param => {
      this.headers = this.headers.append(param.name, param.value);
    });
  }

  private setParams(_params?: IHttpParam[]) {
    if ( !_params || _params.length < 1)
      return [];
    this.params = new HttpParams();

    _params.forEach(element => {
      this.params.set(element.name, element.value)
    });
  }
}
