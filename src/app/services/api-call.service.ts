import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private _httpClient:HttpClient) { }

  getSupplierAddresses() {
    return this._httpClient.get(`${environment.apiUrl}/api/v1/getAddresses/SUP101`)
  }

  getSupplierCustomers() {
    return this._httpClient.get(`${environment.apiUrl}/api/v1/getCustomers/SUP101`)
  }
  
}
