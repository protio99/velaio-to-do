import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];

  private tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject(this.tasks);


  constructor() { }

  // ngOnInit() {
  //   const storage = localStorage.getItem('tasks');
  //   if (storage) {
  //     const tasks = JSON.parse(storage);
  //     this.tasks = [...this.tasks, tasks];
  //   }
  // }



  getTasks(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }

  addTask(newTask: Task): void {
    this.tasks.push(newTask);
    this.tasksSubject.next(this.tasks);
    console.log("entre", this.tasks);

  }
}
