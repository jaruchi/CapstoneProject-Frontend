import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  user!: User;
  constructor(private loginSvc: LoginService) {}

  ngOnInit(): void {
    this.loginSvc.init().subscribe((u) => (this.user = u));
  }
}
