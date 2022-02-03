import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable, of } from 'rxjs';
import { LoginRespose, User } from '../model/user';

const HOST: string = '/pipe/';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user: User = {
    id: 0,
    emailAddress: '',
    userName: '',
    firstName: '',
    lastName: '',
    address: '',
    zipCode: '',
    country: '',
    city: '',
    state:'',
  };
  token: LoginRespose | undefined;

  loginAPI: string = HOST + `auth/users/login`;
  loggedinAPI: string = HOST + `auth/users/isloggedin`;

  registerAPI: string = HOST + `auth/users/register`;

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
        this.user.address = user.address;
        this.user.firstName = user.firstName;
        this.user.lastName = user.lastName;
        this.user.zipCode = user.zipCode;
        this.user.country = user.country;
        this.user.city = user.city;
        this.user.state = user.state;
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

  async register(user: User | any): Promise<void> {
    this.http.post(this.registerAPI, user).subscribe((r) => {
      this.login(user.emailAddress, user.password);
    });
    this.router.navigate(['login']);
  }
}
