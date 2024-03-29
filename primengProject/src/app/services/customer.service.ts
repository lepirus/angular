import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomersLarge() {
    return this.http.get<any>('assets/customers-large.json')
      .toPromise()
      .then(res => <Customer[]>res.data)
      .then(data => { return data; });
  }

  getCustomersSmall() {
    return this.http.get<any>('assets/customers-small.json')
      .toPromise()
      .then(res => <Customer[]>res.data)
      .then(data => { return data; });
  }

  getCustomersMedium() {
    return this.http.get<any>('assets/customers-medium.json')
      .toPromise()
      .then(res => <Customer[]>res.data)
      .then(data => { return data; });
  }

  getCustomersXLarge() {
    return this.http.get<any>('assets/customers-xlarge.json')
      .toPromise()
      .then(res => <Customer[]>res.data)
      .then(data => { return data; });
  }

}
