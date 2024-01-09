import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getCustomers(): Observable<any> {
    return this.http.get<any>(`/api/Customer`);
  }

  getCustomerAddresses(customerId: any): Observable<any> {
    return this.http.get<any>(`/api/Addresses/customer/${customerId}`);
  }
}
