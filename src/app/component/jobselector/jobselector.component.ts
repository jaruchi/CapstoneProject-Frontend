import { Component, OnInit } from '@angular/core';
import { JobType } from 'src/app/model/job-type';
import { jobTypes } from 'src/app/model/mock';

@Component({
  selector: 'app-jobselector',
  templateUrl: './jobselector.component.html',
  styleUrls: ['./jobselector.component.scss']
})
export class JobselectorComponent implements OnInit {

  jobtypes: JobType[] = [...jobTypes];

  constructor() { }

  ngOnInit(): void {
  }

}
