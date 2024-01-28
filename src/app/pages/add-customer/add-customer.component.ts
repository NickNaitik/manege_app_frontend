import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiCallService } from '../../services/api-call.service';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent implements OnInit {

  allAddresses:any
  

  myForm!: FormGroup;// Adding '!' to indicate that it will be initialized in the constructor
  apiResponse: string | null = null; // Variable to hold the API response

  constructor(private fb: FormBuilder, private http: HttpClient, private _api:ApiCallService) {}

  ngOnInit(): void {
    this.getSupplierAddress();
    this.myForm = this.fb.group({
      cus_name: ["", Validators.required],
      cus_shopName: ["", Validators.required],
      cus_mobile: ["", Validators.required],
      cus_email: ["", [Validators.required, Validators.email]],
      cus_address: ["", Validators.required],
      supplier_uid: ["", Validators.required],
    });
  }

  public getSupplierAddress() {
    this._api.getSupplierAddresses().subscribe({
      next: data => {
        console.log(data);
        this.allAddresses=data
      },
      error: error => {
        console.log(error);
      }
    });
  }

  onSubmit() {
    console.log('Ynha aaya')
    console.log(this.myForm.valid)
    if (this.myForm.valid) {
      console.log('Andar aaya')
      const formData = this.myForm.value;
      console.log(formData)
      
      this.sendDataToBackend(formData);
    }
  }

  sendDataToBackend(formData: any) {
    const jsonFormData = JSON.stringify(formData);
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    // Replace 'your-backend-api-endpoint' with your actual endpoint
    console.log('Ynha aaya')
    this.http.post('http://localhost:8080/api/v1/addCustomer', jsonFormData, { headers, responseType: 'text' }).subscribe(
      (response : any) => {
        console.log('API response:', response);
        this.apiResponse = response; // Store the API response
        this.clearForm(); // Clear the form fields
        
      },
      (error) => {
        console.error('API error:', error);
        // Handle the error as needed
      }
    );
  }

  clearForm() {
    this.myForm.reset(); // Reset the form to its initial state
    // this.apiResponse = null; // Clear the API response
  }

}
