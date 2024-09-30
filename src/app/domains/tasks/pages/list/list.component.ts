import { Component } from '@angular/core';
import { TaskComponent } from '../../components/task/task.component';
import { Task } from 'src/app/domains/shared/models/task.model';
import { TaskService } from 'src/app/domains/shared/services/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  constructor(
    private taskService: TaskService,
  ){}

  task: Task[] = []

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.task = tasks;
      console.log("Tareas desde el componente", this.task);
    });
  }

  showCreateTaskForm = false;

  toggleCreateTaskForm (event: Event) {
    console.log("entre?");

      this.showCreateTaskForm = !this.showCreateTaskForm;
  }

}
