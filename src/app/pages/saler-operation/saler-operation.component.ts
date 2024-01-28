import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskComponent } from '../../components/task/task.component';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { AddAddressComponent } from '../add-address/add-address.component';
import { CheckCustomersComponent } from "../check-customers/check-customers.component";

@Component({
    selector: 'app-saler-operation',
    standalone: true,
    templateUrl: './saler-operation.component.html',
    styleUrl: './saler-operation.component.css',
    imports: [CommonModule, TaskComponent, AddCustomerComponent, AddAddressComponent, CheckCustomersComponent]
})
export class SalerOperationComponent {

}
