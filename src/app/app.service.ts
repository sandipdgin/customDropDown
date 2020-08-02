import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './core/model/employee';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  base_url: string = 'http://mybackend.com/api/';
  // tslint:disable-next-line: variable-name
  employees_endpoint = 'employees';
  constructor(private http: HttpClient) {}

  getEmployees(): any {
    console.log('adsfasdf', this.base_url + this.employees_endpoint);
    return this.http.get(this.base_url + this.employees_endpoint);
  }
}
