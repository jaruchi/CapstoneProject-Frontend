import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from 'src/app/model/application';
import { Requirement } from 'src/app/model/requirement';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pet-care-requirement',
  templateUrl: './pet-care-requirement.component.html',
  styleUrls: ['./pet-care-requirement.component.scss'],
})
export class PetCareRequirementComponent implements OnInit {
  curReqId!: number;
  curJobTypeId!: number;
  openedApplicationsForCurrJobType!: Application[];
  requirement!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiSvc: ApiService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.curJobTypeId = 2;
    this.curReqId = 0;
    this.requirementToFormData({
      id: 0,
      title: '',
      day: '',
      subject: '',
      level: '',
      pets: '',
      ageRange: '',
      services: '',
    });
  }

  requirementToFormData(req: Requirement) {
    // let reqDesc = { day: '', pets: null};
    // try {
    //   reqDesc = JSON.parse(req.reqDescription || '{}');
    // } catch (e) {}

    this.requirement = this.fb.group({
      title: [req.title],
      day: [req.day],
      pets: [req.pets],
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
      day: fv.day,
      subject: '',
      level: '',
      pets: fv.pets,
      ageRange: '',
      services: '',
      //reqDescription: JSON.stringify(fv),
    };
    this.apiSvc.updateRequirement(req).subscribe((newReq) => {
      console.log('requirement updated');
      this.snackit('Your requirement created.');
    });
  }

  delete() {
    this.apiSvc.deleteRequirement(this.curReqId).subscribe((deletedReq) => {
      this.snackit('Your requirement deleted.');
      this.router.navigate(['/open-reqs']);
    });
  }

  create() {
    const fv = this.requirement.value;
    const req: Requirement = {
      id: 0,
      title: fv.title,
      day: fv.day,
      subject: '',
      level: '',
      pets: fv.pets,
      ageRange: '',
      services: '',
      //reqDescription: JSON.stringify(fv),
    };
    this.apiSvc
      .createRequirement(this.curJobTypeId, req)
      .subscribe((newReq) => {
        if (newReq.id > 0) {
          this.snackit('Your requirement created.');

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
        this.snackit('Congratulations!!! you found someone to help you.');

        const newRoute = `/fulfilled-reqs`;
        this.router.navigate([newRoute]);
      });
  }

  snackit(msg: string): void {
    this.snackBar.open(msg, undefined, {
      duration: 2000,
    });
  }
}
