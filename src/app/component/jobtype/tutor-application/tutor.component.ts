import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from 'src/app/model/application';
import { Requirement } from 'src/app/model/requirement';
import { ApiService } from 'src/app/services/api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.scss'],
})
export class TutorApplicationComponent implements OnInit {
  curAppId!: number;
  curJobTypeId!: number;
  openedRequirementsForCurrJobType!: Requirement[];
  application!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiSvc: ApiService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.curJobTypeId = 0;
    this.curAppId = 0;
    this.applicationToFormData({
      id: 0,
      heading: '',
      day: '',
      subject: '',
      level: '',
      pets: '',
      ageRange: '',
      services: '',
    });
  }

  // application = this.fb.group({
  //   heading: [''],
  //   day: [''],
  //   subject: [''],
  //   level: [''],
  //   id: [0],

  //   pets: '',
  //   ageRange: '',
  //   services: '',
  // });

  applicationToFormData(app: Application) {
    this.application = this.fb.group({
      heading: [app.heading],
      day: [app.day],
      subject: [app.subject],
      level: [app.level],
      id: [app.id],
      pets: [app.pets],
      ageRange: [app.ageRange],
      services: [app.services],
    });
  }

  getAndFillAppData() {
    this.apiSvc
      .getApplication(this.curAppId)
      .subscribe((app) => this.applicationToFormData(app));
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      this.curAppId = parseInt(params.get('app-id') || '0');
      this.curJobTypeId = parseInt(params.get('jobtype-id') || '0');
      if (this.curAppId > 0) this.getAndFillAppData();
    });

    //need to add getOthersOpenRequirementsByJobType
  }

  update() {
    const fv = this.application.value;
    const app: Application = {
      id: this.curAppId,
      heading: fv.heading,
      day: fv.day,
      subject: fv.subject,
      level: fv.level,
      pets: fv.pets,
      ageRange: fv.ageRange,
      services: fv.services,

    };
    this.apiSvc.updateApplication(app).subscribe((newApp) => {
      console.log('application updated');
      this.snackit('Your application updated.');
    });
  }

  delete() {
    this.apiSvc.deleteApplication(this.curAppId).subscribe((deletedApp) => {
      this.snackit('Your application deleted.');
      this.router.navigate(['/open-apps']);
    });
  }

  create() {
    const fv = this.application.value;
    const app: Application = {
      id: 0,
      heading: fv.heading,
      day: fv.day,
      subject: fv.subject,
      level: fv.level,
      pets: fv.pets,
      ageRange: fv.ageRange,
      services: fv.services,
    };
    this.apiSvc
      .createApplication(this.curJobTypeId, app)
      .subscribe((newApp) => {
        if (newApp.id > 0) {
          this.snackit('Your application created.');

          this.curAppId = newApp.id;
          this.applicationToFormData(newApp);
          const newRoute = `/app/${newApp.id}/${this.curJobTypeId}`;
          this.router.navigate([newRoute]);
        }
      });
  }

  
  acceptApplication(reqid: number) {
    // accept application for requirement to be done in next iteration
    this.apiSvc
      .acceptAnApplicationForRequirement(reqid, this.curAppId)
      .subscribe((newApp) => {
        this.snackit('Congratulations!!! your application is accepted.');
        const newRoute = `/fulfilled-apps`;/// changed
        this.router.navigate([newRoute]);
      });
  }

  snackit(msg: string): void {
    this.snackBar.open(msg, undefined, {
      duration: 2000,
    });
  }

  format(day?: string): string {
    return moment(day).format('MMM-DD-YYYY');
  }
}
