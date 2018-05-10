import {map} from 'rxjs/internal/operators';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class MysqlService {
  // apiUrl = 'http://www.fsmanagers.com/cab';// live;
   apiUrl = 'http://192.168.1.105/autec';
  //apiUrl = 'http://192.168.218.2/autec';

  constructor(public http: HttpClient) {
  }

  // public getVehicle() {
  //   return this.http.get('http://192.168.1.33/cab/getvehicle.php')
  //     .map(rep => rep.json());
  // }
  getVehicle() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/getvehicle.php').subscribe(data => {
        resolve(data['products']);
      }, err => {
        console.log(err);
      });
    });
  }

  getCity(val) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/getcity.php?city='+val).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }



  addCustomer(data) {
     // tslint:disable-next-line:prefer-const
     let body = JSON.stringify(data);
    return this.http.post(this.apiUrl + '/addcustomer.php', body).toPromise();
}

addcontact(data) {
  // tslint:disable-next-line:prefer-const
  let body = JSON.stringify(data);
 return this.http.post(this.apiUrl + '/addcontact.php', body).toPromise();
}

}


