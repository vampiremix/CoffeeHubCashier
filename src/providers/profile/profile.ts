import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProfileProvider {

  //////////////////// Declaration //////////////////////////
  apiUrl: string = 'https://coffeehub.herokuapp.com/';
  headers = new Headers({
    'Content-Type': 'application/json'
  });

  optionsURL = new RequestOptions({
    headers: this.headers
  });

  //////////////////// Declaration //////////////////////////

  constructor(public http: Http) {
    console.log('Hello ProfileProvider Provider');
  }
  getshop(shopID): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl + 'api/shops/' + shopID).map(res => {
        return res.json();
      }).subscribe(data => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    })
  }
}
