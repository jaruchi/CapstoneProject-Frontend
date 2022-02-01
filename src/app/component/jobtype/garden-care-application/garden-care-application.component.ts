import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from 'src/app/model/application';
import { Requirement } from 'src/app/model/requirement';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-garden-care-application',
  templateUrl: './garden-care-application.component.html',
  styleUrls: ['./garden-care-application.component.scss']
})
export class GardenCareApplicationComponent implements OnInit {

  curAppId!: number;
  curJobTypeId!: number;
  openedRequirementsForCurrJobType!: Requirement[];

  constructor(
    private fb: FormBuilder,
    private apiSvc: ApiService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.curJobTypeId = 4;
    this.curAppId = 0;
  }
  
  application = this.fb.group({
    heading: [''],
    day: [''],
    service: [''],
    id: [0],
  });

  applicationToFormData(app: Application) {
    let appDesc = { day: '', service: null };
    try {
      appDesc = JSON.parse(app.appDescription || '{}');
    } catch (e) {}

    this.application = this.fb.group({
      heading: [app.heading],
      day: [appDesc?.day],
      service: [appDesc?.service],
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
      appDescription: JSON.stringify(fv),
    };
    this.apiSvc.updateApplication(app).subscribe((newApp) => {
      console.log('application updated');
      //todo: show a snackbar that req updated
      alert("Updated!!!");
    });
  }

  delete() {
    this.apiSvc.deleteRequirement(this.curAppId).subscribe((deletedApp) => {
      this.router.navigate(['/open-apps']);
    });
  }

  create() {
    const fv = this.application.value;
    const app: Application = {
      id: 0,
      heading: fv.heading,
      appDescription: JSON.stringify(fv),
    };
    this.apiSvc
      .createApplication(this.curJobTypeId, app)
      .subscribe((newApp) => {
        if (newApp.id > 0) {
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
        const newRoute = `/fulfilled-reqs`;
        this.router.navigate([newRoute]);
      });
  }

}
