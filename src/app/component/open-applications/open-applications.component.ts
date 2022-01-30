import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/model/application';
import { openApplications } from 'src/app/model/mock';

@Component({
  selector: 'app-open-applications',
  templateUrl: './open-applications.component.html',
  styleUrls: ['./open-applications.component.scss'],
})
export class OpenApplicationsComponent implements OnInit {
  applications: Application[] = [...openApplications];
  constructor() {}

  ngOnInit(): void {}
}
