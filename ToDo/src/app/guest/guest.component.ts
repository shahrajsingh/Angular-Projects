import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  isExpanded: boolean = false;
  tabs: String[] = ['My Day', 'Important', 'Tasks'];
  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  tab: String = this.tabs[0];
  day: String = "";
  month: String = "";
  date: Number;
  d: Date;
  input: string;
  tasks: Task[] = [];
  show: boolean = false;
  showcompletedheader: boolean;
  _id: string;
  audio
  constructor() {
    this.d = new Date();
    this.day += this.days[this.d.getDay()];
    this.month += this.months[this.d.getMonth()];
    this.date = this.d.getDate();
    this.audio = new Audio();
    this.audio.src = "../Completed.wav";
    this.audio.load();
    this._id = '0';
  }

  ngOnInit(): void {
  }

  menu1() {

    if (this.isExpanded) {

      this.off();
      this.isExpanded = false;
    } else {

      this.on();
      this.isExpanded = true;
    }
  }
  on() {
    if (window.innerWidth < 520) {
      document.getElementById("col").style.width = "150px";
      document.getElementById("overlay").style.display = "block";


    } else {
      document.getElementById("col").style.width = "150px";
      document.getElementById("app-container").style.margin = "0px 0px 0px 150px";
    }

  }
  off() {



    document.getElementById("col").style.width = "58px";
    document.getElementById("app-container").style.margin = "0px 0px 0px 58px";
    document.getElementById("overlay").style.display = "none";



  }
  settab(n) {
    this.tab = this.tabs[n];
  }

  addtsk(form: NgForm) {
    if (form.invalid) {
      return;
    } else {

      const tsk: Task = {
        _id: this._id,
        status: false,
        task: form.value.taskinput,
        important: false,
        timeStamp: this.d.getHours() + ":" + this.d.getMinutes() + ":" + this.d.getSeconds(),
        date: this.day + ", " + this.date + " " + this.month + " " + this.d.getFullYear(),
        userId: null
      };
      if (this.tab === 'Important') {
        tsk.important = true;
      }
      let i = parseInt(this._id);
      this._id = "";
      i++;
      this._id += i;
      this.tasks.push(tsk);
    }
    form.reset();
  }

  markImortant(task: Task) {
    //this.taskService.markImportant(task.userId, task._id, task.important);
    const i = parseInt(task._id);
    if(!this.tasks[i].important){
      this.tasks[i].important = true;
      let taskarr:Task[] = this.tasks;
      this.tasks = [];
      this.tasks = taskarr;
    }else{
      this.tasks[i].important = false;
      let taskarr:Task[] = this.tasks;
      this.tasks = [];
      this.tasks = taskarr;
    }
  }

  completeTask(task: Task) {
    console.log(task.status);
    if (task.status) {
     
      this.tasks[parseInt(task._id)].status = false; 
     
     
    }else{
      this.tasks[parseInt(task._id)].status = true; 
    }

  }

  showcompletedtask() {
    if (this.show) {
      this.show = false;
      document.getElementById("arrow").style.transform = "rotate(0deg)";
      document.getElementById('arrow').style.padding = "14px 0px 0px 0px";
    } else {
      this.show = true;
      document.getElementById("arrow").style.transform = "rotate(90deg)";
      document.getElementById('arrow').style.padding = "0px 0px 0px 14px";
    }
  }

  delete(task) {
    this.tasks.splice[parseInt(task._id),1];
  }

}
