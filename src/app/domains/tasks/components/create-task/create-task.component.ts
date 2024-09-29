import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from 'src/app/domains/shared/services/task.service';
import { Task } from 'src/app/domains/shared/models/task.model';
import { FormArray, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  // createTaskForm!: FormGroup;

  @Output() closeCreateTask = new EventEmitter();

  closeCreateTaskHandler() {
    this.closeCreateTask.emit();
  }

  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder
  ) {}


  createTaskForm = this.formBuilder.group({
    taskName: ['',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^(?=.*[a-zA-Z])\s*(\S+(\s+\S+)*)?\s*$/)
      ]
    ],
    deadlineDate: ['',
      [
        Validators.required,
      ]
    ],
    people: this.formBuilder.group({
      personName: ['',Validators.required],
      age: ['',[
        Validators.required,
        Validators.min(18)
      ]],
      skills: this.formBuilder.array([this.formBuilder.control('')], [Validators.required])
    })
})


  addTask(): void {
    console.log(this.createTaskForm);

    // const newTask: Task = {
    //   id: Math.floor(Math.random() * 1000),
    //   title: 'New Task',
    //   deadlineDate: '2024-10-10',
    //   associatedPeople: [],
    //   completed: false
    // };
    // // this.taskService.addTask(newTask);
    // console.log("nueva tarea", newTask);

  }

  get skills(){
    return this.createTaskForm.get('people.skills') as FormArray;
  }

  addSkill() :void {
    this.skills.push(this.formBuilder.control(''));
  }

}
