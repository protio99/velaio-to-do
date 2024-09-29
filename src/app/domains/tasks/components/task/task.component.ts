import { Component, Input } from '@angular/core';
import { Task } from 'src/app/domains/shared/models/task.model';
import { Person } from 'src/app/domains/shared/models/person.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {

  @Input({ required: true }) task!: Task;
}
