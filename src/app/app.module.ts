import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './domains/tasks/pages/list/list.component';
import { TaskComponent } from './domains/tasks/components/task/task.component';
import { CommonModule } from '@angular/common';
import { CreateTaskComponent } from './domains/tasks/components/create-task/create-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CreateTaskComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
