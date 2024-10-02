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

  filter = 'all';

  constructor(
    private taskService: TaskService,
  ){}

  task: Task[] = []
  filteredTasks: Task[] = [];

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.task = tasks;
      this.filteredTasks = tasks;
    });
  }

  showCreateTaskForm = false;

  toggleCreateTaskForm (event: Event) {
      this.showCreateTaskForm = !this.showCreateTaskForm;
  }

  updateFilter(value: 'all' | 'completed' | 'pending') {
    this.filter = value;
    this.filteredTasks = this.filterTasksByState();
  }

  filterTasksByState () {
    const filter = this.filter;
    const tasks = this.task;
    if (filter === 'completed') {
      return tasks.filter((task) => task.completed === true);
    }
    if (filter === 'pending') {
      return tasks.filter((task) => task.completed === false);
    }
    return tasks;
  };

  toogleHandler(event: Event, index: number) {
    console.log('evento', event);
    const toggle = event.target as HTMLInputElement;
    const isCompleted = toggle.checked;
    this.taskService.toggleStateCompleted(index, isCompleted);
    // this.task =  this.task.map((task, i) => {
    //     if (index === i) {
    //       task.completed = isCompleted;
    //     }
    //     return task;
    //   })
  }


}
