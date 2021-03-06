import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { AuthService } from 'src/app/auth/auth.service';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  input: String;
  d
  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  day: String = "";
  month: String = "";
  date: String = "";
  UserId: String;
  constructor(private taskService: TaskService, private Authservice: AuthService, private listComponent: TaskListComponent) {
    this.d = new Date();
    this.day += this.days[this.d.getDay()];
    this.month += this.months[this.d.getMonth()];
    this.date += this.d.getDate();
    
  }

  ngOnInit(): void {
    this.UserId = this.Authservice.getUserId();
    
  }
  addtsk(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      const tsk = {
        userId: this.UserId,
        status: false,
        task_name: form.value.taskinput,
        important: false,
        timeStamp: this.d.getHours() + ":" + this.d.getMinutes() + ":" + this.d.getSeconds(),
        date: this.day + ", " + this.date + " " + this.month + " " + this.d.getFullYear(),
        index: null
      };
      if(this.listComponent.getnavdetail() === 'important'){
        tsk.important = true;
      }
      
      console.log(tsk);
      this.taskService.addtask(tsk);
    }
    form.reset();
  }


}
