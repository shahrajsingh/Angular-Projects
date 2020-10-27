import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { AuthData } from '../models/auth-data.model';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';

const BACKEND_URL = environment.apiUrl + '/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  getIsAuth() {
    return this.isAuthenticated;
  }

  getUserId() {
    return this.userId;
  }

  getToken() {
    return this.token;
  }

  Login(email: string, password: string) {
    const authData: AuthData = {
      email: email,
      password: password,
    };
    let msg: string;
    this.http
      .post<{
        message: string;
        result: { token: string; expiresIn: number; userId: string };
      }>(BACKEND_URL + '/login', authData)
      .subscribe(
        (res) => {
          const token = res.result.token;
          this.token = token;
          if (token) {
            const expiresInDuration = res.result.expiresIn;
            this.setAuthTimer(expiresInDuration);
            this.userId = res.result.userId;
            this.AuthListenerSub.next(true);
            const now = new Date();
            const expirationDate = new Date(
              now.getTime() + expiresInDuration * 1000
            );
            this.saveAuthData(token, expirationDate, this.userId);
            this.router.navigate(['/']);
            msg = res.message;
          }
        },
        (error) => {
          msg = error.error.message;

          this.AuthListenerSub.next(false);
        }
      );
    return msg;
  }

  Signup(authData: User) {
    this.http
      .post<{ message: string; result: any }>(BACKEND_URL + '/signup', authData)
      .subscribe(
        (res) => {
          this.router.navigate(['/']);
        },
        (error) => {
          this.AuthListenerSub.next(false);
        }
      );
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      this.setAuthTimer(expiresIn / 1000);
      this.AuthListenerSub.next(true);
    }
  }

  private setAuthTimer(duration: number) {
    console.log('Setting timer: ' + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.AuthListenerSub.next(false);
    this.userId = null;
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/']);
    window.location.reload();
  }

  private saveAuthData(token: string, expirationDate: Date, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const userId = localStorage.getItem('userId');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userId: userId,
    };
  }

  AuthListener() {
    return this.AuthListenerSub.asObservable();
  }

  isAuthenticated: boolean = false;
  AuthListenerSub = new Subject();
  private token: string;
  private tokenTimer: any;
  private userId: string;

  constructor(private http: HttpClient, private router: Router) {}
}
