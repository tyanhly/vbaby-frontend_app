import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import './config.js';
/*
  Generated class for the Home provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ContentService {

  constructor(public http: Http) {
    console.log('Hello Home Provider');
  }

  getContents() {
    return this.http.get(API_URL_CONTENTS);
  }
  getContent(id) {
    return this.http.get(API_URL_CONTENTS + "/" + id);
  }

}
