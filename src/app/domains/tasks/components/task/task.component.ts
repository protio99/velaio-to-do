import { Component, Input } from '@angular/core';
import { Task } from 'src/app/domains/shared/models/task.model';
import { TaskService } from 'src/app/domains/shared/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {

  @Input({ required: true }) task!: Task;
  @Input({ required: true }) taskIndex!: number;


  constructor(private taskService : TaskService) {}

  toogleHandler(event: Event, index: number) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.taskService.toggleStateCompleted(index, isChecked);
  }
}
