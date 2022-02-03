import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from 'src/app/model/application';
import { openApplications } from 'src/app/model/mock';
import { ApiService } from 'src/app/services/api.service';
import * as moment from 'moment';
@Component({
  selector: 'app-open-applications',
  templateUrl: './open-applications.component.html',
  styleUrls: ['./open-applications.component.scss'],
})
export class OpenApplicationsComponent implements OnInit {
  applications$!: Observable<Application[]>;
  constructor(private apiSvc: ApiService
    ) { }

  ngOnInit(): void {
    this.applications$ = this.apiSvc.getOpenApps();
  }

  
  format(day?: string): any {
    return moment(day).format("MMM-DD");
  }

  // mom(day?: string): string {
  //   return moment(day || '', 'YYYYMMDD').fromNow();
  // }
}
