import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { TokenRequest } from '../models/token-request';
import { TokenResponse } from '../models/token-response';

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

  login(formData1 : any){
    const jsonFormData = JSON.stringify(formData1);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this._httpClient.post<TokenResponse>(`${environment.apiUrl}/api/v1/accessToken`, jsonFormData, { headers })
  }

  
}
