import { Injectable } from '@angular/core';
import { UserAPI } from '../../fw/users/user-api';
import { Observable, of } from 'rxjs';
import { Router } from '../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService implements UserAPI {

  isAuthenticated = false;

  constructor(private router: Router) { }

  signIn(username: string, password: string, rememberMe: boolean): Observable<any> {
    console.log('UserService.signIn: ' + username + ' ' + password + ' ' + rememberMe);
    this.isAuthenticated = true;
    return of({});
  }

  signOut(): Observable<any> {
    this.isAuthenticated = false;
    this.router.navigate(['/signin']);
    return of({});
  }


}
