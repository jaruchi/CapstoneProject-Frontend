import { Component, OnInit } from '@angular/core';
import { openReqs } from 'src/app/model/mock';
import { Requirement } from 'src/app/model/requirement';

@Component({
  selector: 'app-requirement-tile',
  templateUrl: './requirement-tile.component.html',
  styleUrls: ['./requirement-tile.component.scss'],
})
export class RequirementTileComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {}
}
