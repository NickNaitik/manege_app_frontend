import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
// INPUT ADD KIYE HAI
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

}
