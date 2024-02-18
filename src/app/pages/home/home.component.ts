import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { TokenRequest } from '../../models/token-request';
import { TokenResponse } from '../../models/token-response';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ApiCallService } from '../../services/api-call.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  loginForm!: FormGroup;// Adding '!' to indicate that it will be initialized in the constructor
  tokenResponse : TokenResponse = {};
  tokenResponse1 : TokenResponse = {};
  supplierID: any;
  verifyTokenForm!: FormGroup;

  

  constructor(private fb: FormBuilder, private router:Router,private http: HttpClient, private _api:ApiCallService){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      supplier_Id: ["", Validators.required],
      supplier_Password: ["", Validators.required]
    });

    this.verifyTokenForm = this.fb.group({
      code: ["", Validators.required],
      supplier_id: ['supplierID', Validators.required]
    })
  }

  logInSubmit() {
    
    if(this.loginForm.valid) {
      const formData1 = this.loginForm.value
      this.login(formData1); 
    }
    }

  login(formData : any) {
    this._api.login(formData).subscribe(
      {
        next: (response):void => {
          
          this.tokenResponse = response;
          if(!this.tokenResponse.twoFactorEnabled) {
            sessionStorage.setItem('access_token',this.tokenResponse.access_token as string);
            sessionStorage.setItem('refresh_token',this.tokenResponse.refresh_token as string);
            this.router.navigate(['salerOperation']);
          } else {
            sessionStorage.setItem('supplier_ID', formData.supplier_Id as string);
            this.supplierID=sessionStorage.getItem('supplier_ID');
            console.log("supplier ID :"+this.supplierID);
            
          }
        }
      }
    );
  }

  onVerifySubmit() {

    if(this.verifyTokenForm.valid) {
      const formData1 = this.verifyTokenForm.value
      this.verifyCode(formData1); 
    }
  }

    verifyCode(formData1 : any) {
      const jsonFormData = JSON.stringify(formData1);
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      this.http.post('http://localhost:8080/api/v1/verify', jsonFormData , { headers }).subscribe(
       (response) => {
         console.log('API response:', response);
         this.tokenResponse1 = response; // Store the API response
         setTimeout(()=>{
           sessionStorage.setItem('access_token', this.tokenResponse1.access_token as string);
           sessionStorage.setItem('refresh_token', this.tokenResponse1.refresh_token as string);
           this.router.navigate(['salerOperation']);
         }, 2000)
       },
       (error) => {
         console.error('API error:', error);
        // Handle the error as needed
      }
      );
    }

    

}
