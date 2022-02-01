import { Component, OnInit } from '@angular/core';

import { openReqs } from 'src/app/model/mock';
import { Requirement } from 'src/app/model/requirement';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-open-requirements',
  templateUrl: './open-requirements.component.html',
  styleUrls: ['./open-requirements.component.scss'],
})
export class OpenRequirementsComponent implements OnInit {
  requirements: Requirement[] = [];

  constructor(private apiSvc: ApiService) {}

  ngOnInit(): void {
    
    this.apiSvc.getOpenReqs().subscribe(openReqs => this.requirements = openReqs);
  }
}
