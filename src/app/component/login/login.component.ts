import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  
  constructor(
    private loginSvc: LoginService,
    private formBuilder: FormBuilder
  ) {}

  loginCred = this.formBuilder.group({
    email: [''],
    password: [''],
  });

  ngOnInit(): void {
    this.loginSvc.init().subscribe((u) => (this.user = u));
  }

  login() {
    console.log(this.loginCred.value);
    this.loginSvc.login(
      this.loginCred.value.email,
      this.loginCred.value.password
    );
  }
}
