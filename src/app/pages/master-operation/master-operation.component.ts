import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-master-operation',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './master-operation.component.html',
  styleUrl: './master-operation.component.css'
})
export class MasterOperationComponent {

}
