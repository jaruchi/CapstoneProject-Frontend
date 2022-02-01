import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/model/application';
import { openApplications } from 'src/app/model/mock';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-open-applications',
  templateUrl: './open-applications.component.html',
  styleUrls: ['./open-applications.component.scss'],
})
export class OpenApplicationsComponent implements OnInit {
  applications: Application[] = [];
  constructor(private apiSvc: ApiService) {}

  ngOnInit(): void {
    this.apiSvc
      .getOpenApps()
      .subscribe((openApps) => (this.applications = openApps));
  }
}
