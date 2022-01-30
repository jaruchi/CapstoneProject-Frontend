import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email!: string;
  password: string = '';
  searchSubject = new Subject();
  user!: User;

  constructor(private loginSvc: LoginService) {}

  ngOnInit(): void {
    this.loginSvc.init().subscribe((u) => (this.user = u));
  }

  login(email: string, password: string) {
    this.loginSvc.login(email, password);
  }
}
