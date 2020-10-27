import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  user: User = {
    _id: 'sdaf12',
    FirstName: 'shahraj',
    LastName: 'singh',
    Address: 'punjab',
    Email: 'abc@gmail.com',
    Image:
      'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80',
    Password: 'asd',
    DoB: 19,
    Gender: 'Male',
  };
  editpersonal: boolean = false;
  editemail: boolean = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  personaledit() {
    this.editpersonal = !this.editpersonal;
  }
  emailedit() {
    this.editemail = !this.editemail;
  }
  personalinfoform(form: NgForm) {}
  contact(form: NgForm) {}
}
