import { Injectable } from "@angular/core";
import { HttpParam } from "./http-param";
import { HttpUrls } from "./http-urls.enum";

@Injectable({
  providedIn: 'root'
})
export class HttpCustomClient {

  constructor(private http HttpClient) {

  }

  private params: HttpParam[] = [];

  Get(url:HttpUrls, _params?: HttpParam[] ) {

  }

  Post(url:HttpUrls, _params?: HttpParam[]) {

  }

  Put(url:HttpUrls, _params?: HttpParam[]) {

  }

  Delete(url:HttpUrls, idDelete: number) {

  }

  private setParam(_params?: HttpParam[]) {
    this.params =  _params;
  }

  private setBody(_params?: HttpParam[]) {
    this.params =  _params;
  }

}
