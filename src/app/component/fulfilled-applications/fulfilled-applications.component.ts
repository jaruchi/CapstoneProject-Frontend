import { Component, OnInit } from '@angular/core';
import { ReqAppCombination } from 'src/app/model/requirement';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-fulfilled-applications',
  templateUrl: './fulfilled-applications.component.html',
  styleUrls: ['./fulfilled-applications.component.scss'],
})
export class FulfilledApplicationsComponent implements OnInit {
  applications: ReqAppCombination[] = [];
  constructor(private apiSvc: ApiService) {}

  ngOnInit(): void {
    this.apiSvc
      .getMyMatchedApplications()
      .subscribe((fulfilledapps) => (this.applications = fulfilledapps));
  }
}
