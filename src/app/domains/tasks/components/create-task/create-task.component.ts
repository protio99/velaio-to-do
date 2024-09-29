import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  @Output() closeCreateTask = new EventEmitter();

  closeCreateTaskHandler() {
    this.closeCreateTask.emit();
  }


}
