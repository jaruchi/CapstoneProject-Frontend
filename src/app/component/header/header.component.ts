import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user!: User;
  smartUser$!: Observable<User>;
  @Output() myaction = new EventEmitter();

  constructor(private loginSvc: LoginService) {}
  ngOnInit(): void {
    // this.svc.init().subscribe((u) => (this.user = u));
    this.smartUser$ = this.loginSvc.init();
    this.smartUser$.subscribe((u) => (this.user = u));
  }
  toggle() {
    this.myaction.emit('');
  }
}
