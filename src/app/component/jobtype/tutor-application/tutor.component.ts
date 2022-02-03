import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from 'src/app/model/application';
import { Requirement } from 'src/app/model/requirement';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.scss'],
})
export class TutorApplicationComponent implements OnInit {
  curAppId!: number;
  curJobTypeId!: number;
  openedRequirementsForCurrJobType!: Requirement[];

  constructor(
    private fb: FormBuilder,
    private apiSvc: ApiService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.curJobTypeId = 1;
    this.curAppId = 0;
  }

  application = this.fb.group({
    heading: [''],
    day: [''],
    subject: [''],
    level: [''],
    id: [0],
  });

  applicationToFormData(app: Application) {
    // let appDesc = { day: '', subject: null, grade: null };
    // try {
    //   appDesc = JSON.parse(app.appDescription || '{}');
    // } catch (e) {}

    this.application = this.fb.group({
      heading: [app.heading],
      day: [app.day],
      subject: [app.subject],
      level: [app.level],
      id: [app.id],
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
      if (this.curAppId > 0) this.getAndFillAppData();
    });
  }

  update() {
    const fv = this.application.value;
    const app: Application = {
      id: this.curAppId,
      heading: fv.heading,
      day: fv.day,
      subject: fv.subject,
      level: fv.level,
      pets: '',
      ageRange: '',
      services: '',

      appDescription: JSON.stringify(fv),
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
      pets: '',
      ageRange: '',
      services: '',
      //appDescription: JSON.stringify(fv),
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
    this.apiSvc
      .acceptAnApplicationForRequirement(reqid, this.curAppId)
      .subscribe((newReq) => {
        this.snackit('Congratulations!!! your application is accepted.');
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
