import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiCallService } from '../../services/api-call.service';
import { TokenResponse } from '../../models/token-response';
import { VerificationRequest } from '../../models/verification-request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-supplier',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-supplier.component.html',
  styleUrl: './add-supplier.component.css'
})
export class AddSupplierComponent  implements OnInit {

  myForm!: FormGroup;// Adding '!' to indicate that it will be initialized in the constructor
  verifyForm!: FormGroup;
  apiResponse: String | null = null; // Variable to hold the API response
  tokenResponse: TokenResponse = {};
  tokenResponse1: TokenResponse = {};

  constructor(private fb: FormBuilder, private http: HttpClient, private _api:ApiCallService, private router:Router) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      supplier_uid: ["", Validators.required],
      supplier_name: ["", Validators.required],
      supplier_mobile: ["", Validators.required],
      supplier_email: ["", [Validators.required, Validators.email]],
      twoFactorEnabled: ["", Validators.required]
    });

    this.verifyForm = this.fb.group({
      code: ["", Validators.required],
      supplier_id: ["", Validators.required]
    })
  }


  onSubmit() {
    console.log('Ynha aaya')
    console.log(this.myForm.valid)
    if (this.myForm.valid) {
      console.log('Andar aaya')
      const formData = this.myForm.value;
      console.log(formData)
      
      this.addSupplier(formData);
    }
  }

  onVerifySubmit() {
    
    if(this.verifyForm.valid) {

      const formData1 = this.verifyForm.value;
      this.verifyCode(formData1); 
    }
    }

    verifyCode(formData1 : any) {
      const jsonFormData = JSON.stringify(formData1);
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });

      this.http.post('http://localhost:8080/api/v1/verify', jsonFormData , { headers }).subscribe(
      (response) => {
        console.log('API response:', response);
        this.tokenResponse1 = response; // Store the API response
        setTimeout(()=>{
          localStorage.setItem('token', this.tokenResponse1.access_token as string);
          this.router.navigate(['home']);
        }, 3000)
        this.clearForm(); // Clear the form fields
      },
      (error) => {
        console.error('API error:', error);
        // Handle the error as needed
      }
    );
    }

    addSupplier(formData: any) {
    const jsonFormData = JSON.stringify(formData);
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    // Replace 'your-backend-api-endpoint' with your actual endpoint
    console.log('Ynha aaya')
    this.http.post('http://localhost:8080/api/v1/MAS01/addSupplier', jsonFormData, { headers }).subscribe(
      (tokenResponse) => {
        console.log('API response:', tokenResponse);
        this.tokenResponse = tokenResponse; // Store the API response
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
