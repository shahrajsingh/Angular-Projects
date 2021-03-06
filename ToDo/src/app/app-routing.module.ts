import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppcontainerComponent } from './appcontainer/appcontainer.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { GuestComponent } from './guest/guest.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  {path: 'guest', component: GuestComponent},
  { path: "signup", component: SignupComponent },
  { path: "app", component: AppcontainerComponent, canActivate: [AuthGuard] },
  { path: "account/:userId", component: SignupComponent, canActivate: [AuthGuard] },
  { path: "resetpass/:user",component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
