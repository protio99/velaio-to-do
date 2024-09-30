import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from 'src/app/domains/shared/services/task.service';
import { Task } from 'src/app/domains/shared/models/task.model';
import { FormArray, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Person } from 'src/app/domains/shared/models/person.model';



@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

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
  people: this.formBuilder.array([])
})

createPerson(): FormGroup {
  return this.formBuilder.group({
    name: ['', Validators.required],
    age: ['', [
      Validators.required,
      Validators.min(18)
    ]],
    skills: this.formBuilder.array([this.formBuilder.control('')], [Validators.required])
  })
}

get people(): FormArray{
  return this.createTaskForm.get('people') as FormArray;
}

addPerson() :void {
  this.people.push(this.createPerson());
}

removePerson(index: number) {
  this.people.removeAt(index);
}

getSkills(personIndex: number): FormArray {
  return this.people.at(personIndex).get('skills') as FormArray;
}

addSkill(personIndex: number) {
  this.getSkills(personIndex).push(this.formBuilder.control('', Validators.required));
}

removeSkill(personIndex: number, skillIndex: number) {
  this.getSkills(personIndex).removeAt(skillIndex);
}

emptyPerson: Person[] = [{
  id: Date.now(),
  name: '',
  age: 0,
  skills: ['']
},]


  addTask(): void {
    if (this.createTaskForm.invalid) {
      return;
    }
    const {taskName, deadlineDate, people} = this.createTaskForm.value
    const peopleArray: Person[] = people as Person[] || this.emptyPerson;
    const newTask: Task = {
      id: Date.now(),
      title: taskName || '',
      deadlineDate: deadlineDate || '',
      associatedPeople: peopleArray,
      completed: false
    };
    this.taskService.addTask(newTask);
  }

}
