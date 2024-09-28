import { Component, Input } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() title: string = '';
  @Input() deadlineDate: string = '';
  @Input() associatedPeople: [string] = [''];


}
