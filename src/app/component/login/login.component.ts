import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  loginCred: FormGroup;
  constructor(
    private loginSvc: LoginService,
    private formBuilder: FormBuilder
  ) {
    this.loginCred = new FormGroup({
      emailAddress: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      address: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      country: new FormControl(),
      zipCode: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.loginSvc.init().subscribe((u) => {
      this.user = u;
      this.loginCred = new FormGroup({
        emailAddress: new FormControl(u.emailAddress),
        firstName: new FormControl(u.firstName),
        lastName: new FormControl(u.lastName),
        address: new FormControl(u.address),
        city: new FormControl(u.city),
        state: new FormControl(u.state),
        country: new FormControl(u.country),
        zipCode: new FormControl(u.zipCode),
        password: new FormControl(),
      });
    });
  }

  login() {
    this.loginSvc.login(
      this.loginCred.value.emailAddress,
      this.loginCred.value.password
    );
  }

  register() {
    const fv = this.loginCred.value;
    fv.userName = fv.firstName || 'First' + ' ' + fv.lastName || 'Last';
    this.loginSvc.register(fv);
  }
}
