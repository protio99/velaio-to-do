import { Component } from '@angular/core';
import { TaskComponent } from '../../components/task/task.component';
import { Task } from 'src/app/domains/shared/models/task.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  task: Task[] = [{
    id: 1,
    title: 'Finish velaio test',
    deadlineDate: '30/09/2024',
    completed: false,
    associatedPeople: [
      {
        id: 1,
        name: 'Daniela Correa Muñoz',
        age: 25,
        skills: ['Angular', 'Js', 'Typescript']
      },
      {
        id: 1,
        name: 'Alejandro Jaramillo',
        age: 25,
        skills: ['Android', 'Js', 'Typescript']
      }
    ]

  }]

  showCreateTaskForm = false;

  toggleCreateTaskForm (event: Event) {
    console.log("entre?");

      this.showCreateTaskForm = !this.showCreateTaskForm;
  }

}
