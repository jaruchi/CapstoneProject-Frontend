import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from 'src/app/model/application';
import { Requirement } from 'src/app/model/requirement';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.scss'],
})
export class TutorRequirementComponent implements OnInit {
  curReqId!: number;
  curJobTypeId!: number;
  openedApplicationsForCurrJobType!: Application[];
  requirement!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiSvc: ApiService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.curJobTypeId = 1;
    this.curReqId = 0;
    this.requirementToFormData({ id: 0, title: '' });
  }

  requirementToFormData(req: Requirement) {
    let reqDesc = { day: '', subject: null, grade: null };
    try {
      reqDesc = JSON.parse(req.reqDescription || '{}');
    } catch (e) {}

    this.requirement = this.fb.group({
      title: [req.title],
      day: [reqDesc?.day],
      subject: [reqDesc?.subject],
      grade: [reqDesc?.grade],
      id: [req.id],
    });
  }

  getAndFillReqData() {
    this.apiSvc.getRequirement(this.curReqId).subscribe((req) => {
      this.requirementToFormData(req);
    });
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      this.curReqId = parseInt(params.get('req-id') || '0');
      if (this.curReqId > 0) this.getAndFillReqData();
    });

    this.apiSvc
      .getOthersOpenApplicationsByJobType(this.curJobTypeId)
      .subscribe((apps) => {
        this.openedApplicationsForCurrJobType = apps;
      });
    
  }

  update() {
    const fv = this.requirement.value;
    const req: Requirement = {
      id: this.curReqId,
      title: fv.title,
      reqDescription: JSON.stringify(fv),
    };
    this.apiSvc.updateRequirement(req).subscribe((newReq) => {
      console.log('requirement updated');
      //todo: show a snackbar that req updated
      alert("Updated!!!");
    });
  }

  delete() {
    this.apiSvc.deleteRequirement(this.curReqId).subscribe((deletedReq) => {
      this.router.navigate(['/open-reqs']);
    });
  }

  create() {
    const fv = this.requirement.value;
    const req: Requirement = {
      id: 0,
      title: fv.title,
      reqDescription: JSON.stringify(fv),
    };
    this.apiSvc
      .createRequirement(this.curJobTypeId, req)
      .subscribe((newReq) => {
        if (newReq.id > 0) {
          this.curReqId = newReq.id;
          this.requirementToFormData(newReq);
          const newRoute = `/req/${newReq.id}/${this.curJobTypeId}`;
          this.router.navigate([newRoute]);
        }
      });
  }

  acceptApplication(appid: number) {
    this.apiSvc
      .acceptAnApplicationForRequirement(appid, this.curReqId)
      .subscribe((newReq) => {
        const newRoute = `/fulfilled-reqs`;
        this.router.navigate([newRoute]);
      });
  }
}
