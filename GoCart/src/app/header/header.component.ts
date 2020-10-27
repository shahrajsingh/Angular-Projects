import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth/auth.service';
import { DialogService } from '../auth/dialog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(
    private _snackBar: MatSnackBar,
    private dialog: DialogService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.getIsAuth();
    this.authService.AuthListener().subscribe((result: boolean) => {
      this.isAuthenticated = result;
    });
  }
  openSnackBar() {
    this._snackBar.open('Please Login!', '', {
      duration: 700,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
  openDialog(): void {
    this.dialog.openDialog();
  }
  logOut() {
    this.authService.logout();
  }
}
