import { Component, OnInit } from '@angular/core';

import { openReqs } from 'src/app/model/mock';
import { Requirement } from 'src/app/model/requirement';

@Component({
  selector: 'app-open-requirements',
  templateUrl: './open-requirements.component.html',
  styleUrls: ['./open-requirements.component.scss'],
})
export class OpenRequirementsComponent implements OnInit {
  requirements: Requirement[] = [...openReqs];
  constructor() {}

  ngOnInit(): void {}
}
