import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './model/user';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'CUMI';
  user!: User;
  constructor(private router: Router, private loginSvc: LoginService) {}
  ngOnInit(): void {
    this.loginSvc.init().subscribe((u) => (this.user = u));
  }
  toggle(): void {}
}
