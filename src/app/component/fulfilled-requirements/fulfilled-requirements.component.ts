import { Component, OnInit } from '@angular/core';
import { Requirement } from 'src/app/model/requirement';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-fulfilled-requirements',
  templateUrl: './fulfilled-requirements.component.html',
  styleUrls: ['./fulfilled-requirements.component.scss']
})
export class FulfilledRequirementsComponent implements OnInit {

  requirements: Requirement[] = [];


  constructor(private apiSvc:ApiService) { }

  ngOnInit(): void {
    this.apiSvc.getFulFilledReqs().subscribe(fulfilledReqs => this.requirements = fulfilledReqs);
  }

}
