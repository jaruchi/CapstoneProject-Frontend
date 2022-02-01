import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // name!: string;
  // email!: string;
  // password: string = '';
  // searchSubject = new Subject();
  // user!: User;

  constructor(){}
    // private loginSvc: LoginService,
    // private formBuilder: FormBuilder) { }
  
  // registerCred = this.formBuilder.group({
  //     name:[''],
  //     email: [''],
  //     password: [''],
  //   });

  ngOnInit(): void {
  }

  // register() {
  //   console.log(this.registerCred.value);
  //   this.loginSvc.register(
  //     this.registerCred.value.name,
  //     this.registerCred.value.email,
  //     this.registerCred.value.password
  //   );
  // }

}
