import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';

@Component({
  selector: 'app-check-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check-customers.component.html',
  styleUrl: './check-customers.component.css'
})
export class CheckCustomersComponent implements OnInit {

  allCustomer:any

  constructor(private http: HttpClient, private _api:ApiCallService) {}

  ngOnInit(): void {
    this.getSupplierCustomers();
  
  }

  public getSupplierCustomers() {
    this._api.getSupplierCustomers().subscribe({
      next: data => {
        console.log(data);
        this.allCustomer=data
      },
      error: error => {
        console.log(error);
      }
    });
  }

}
