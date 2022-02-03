import { Component, OnInit } from '@angular/core';
import { JobType } from 'src/app/model/job-type';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-jobselector',
  templateUrl: './jobselector.component.html',
  styleUrls: ['./jobselector.component.scss'],
})
export class JobselectorComponent implements OnInit {
  jobtypes: JobType[] = [];

  constructor(private apiSvc: ApiService) {}

  ngOnInit(): void {
    this.apiSvc.getJobTypes().subscribe((jTypes) => (this.jobtypes = jTypes));
  }
}
