import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from 'src/app/domains/shared/services/task.service';
import { Task } from 'src/app/domains/shared/models/task.model';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  createTaskForm!: FormGroup;

  @Output() closeCreateTask = new EventEmitter();

  closeCreateTaskHandler() {
    this.closeCreateTask.emit();
  }

  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit():void {
    this.createTaskForm = this.formBuilder.group({
      taskName: ['',Validators.required],
      deadlineDate: ['',Validators.required],
      personName: ['',Validators.required],
      age: ['',Validators.required],


    })
  }

  addTask(): void {
    const newTask: Task = {
      id: Math.floor(Math.random() * 1000),
      title: 'New Task',
      deadlineDate: '2024-10-10',
      associatedPeople: [],
      completed: false
    };
    this.taskService.addTask(newTask);
  }

}
