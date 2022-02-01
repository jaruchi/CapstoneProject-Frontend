import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable, of } from 'rxjs';
import { LoginRespose, User } from '../model/user';

const HOST: string = 'http://localhost:9092';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user: User = { id: 0, emailAddress: '', userName: '' };
  token: LoginRespose | undefined;

  loginAPI: string = `${HOST}/auth/users/login`;
  loggedinAPI: string = `${HOST}/auth/users/isloggedin`;

  //registerAPI: string = `${HOST}/auth/users/register`;


  constructor(private http: HttpClient, private router: Router) {}

  init(): Observable<User> {
    return of(this.user);
  }

  getProfile(): void {
    const headers = {
      Authorization: `Bearer ${this.token?.jwt}`,
    };
    this.http
      .get<User>(this.loggedinAPI, {
        headers,
      })
      .subscribe((user) => {
        this.user.emailAddress = user.emailAddress;
        this.user.id = user.id;
        this.user.userName = user.userName;
      });
  }

  async login(email: string, password: string): Promise<void> {
    const loginBody = { email: email, password: password };
    this.http.post<LoginRespose>(this.loginAPI, loginBody).subscribe((lb) => {
      this.token = lb;
      this.getProfile();
    });
    this.router.navigate(['/']);
  }

  // async register(name: string, email: string, password: string): Promise<void> {
  //   const registerBody = { name: name, email: email, password: password };
  //   this.http.post(this.registerAPI, registerBody).subscribe((r) => {
  //     //this.token = lb;
  //     this.getProfile();
  //   });
  //   this.router.navigate(['login']);
  // }
}
