import { RouterModule, Routes } from '@angular/router';
import { SalerOperationComponent } from './pages/saler-operation/saler-operation.component';
import { HomeComponent } from './pages/home/home.component';
import { AddCustomerComponent } from './pages/add-customer/add-customer.component';
import { AddAddressComponent } from './pages/add-address/add-address.component';
import { CheckCustomersComponent } from './pages/check-customers/check-customers.component';
import { MasterOperationComponent } from './pages/master-operation/master-operation.component';
import { AddSupplierComponent } from './pages/add-supplier/add-supplier.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path:"salerOperation",
        component:SalerOperationComponent,
        title:"SERVICE"
    },
    {
        path:"masterOperation",
        component:MasterOperationComponent,
        title:"SERVICE"
    },
    {
        path:"home",
        component:HomeComponent,
        title:"HOME||LOGIN"
    },
    {
        path:"addCustomer",
        component:AddCustomerComponent,
        title: "ADD CUSTOMER "
    },
    {
        path:"addSupplier",
        component:AddSupplierComponent,
        title: "ADD SUPPLIER "
    },
    {
        path:"addAddress",
        component:AddAddressComponent,
        title: "ADD ADDRESS"
    },
    {
        path:"checkCustomers",
        component:CheckCustomersComponent,
        title: "CUSTOMERS"
    }
];

// Ng module use krne ke liye ye dalna pdta hai 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppModule { }
