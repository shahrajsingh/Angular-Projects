import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading: Boolean;
  private authStatusSub: Subscription;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authStatusSub = this.authService.getAuthStatusListener()
      .subscribe((res) => {
        console.log(res);
      });
    if (this.authService.getIsAuth()) {
      this.router.navigate(["/app"]);
    } else {
      this.isLoading = true;
      setTimeout(() => this.isLoading = false, 1000);
    }

  }
  login(form: NgForm) {
    if (form.invalid) {
      return;
    } else {

      this.authService.login(form.value.email, form.value.password);
    }
  }

}
