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
  //   } else {
  //     localStorage.setItem('tasks', JSON.stringify(this.tasks));
  //   }
  // }



  getTasks(): Observable<Task[]> {
    const storage = localStorage.getItem('tasks');
    if (storage) {
      const tasks = JSON.parse(storage);
      this.tasks = [...this.tasks, tasks];
    }
    return this.tasksSubject.asObservable();
  }

  addTask(newTask: Task): void {
    const storage = localStorage.getItem('tasks');
    let storedTasks: Task[] = [];
    if (storage) {
      storedTasks = JSON.parse(storage);
    }
    this.tasks.push(newTask);
    storedTasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
    this.tasksSubject.next(storedTasks);
  }
}
