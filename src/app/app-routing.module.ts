import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FulfilledRequirementsComponent } from './component/fulfilled-requirements/fulfilled-requirements.component';
import { JobselectorComponent } from './component/jobselector/jobselector.component';
import { TutorApplicationComponent } from './component/jobtype/tutor-application/tutor.component';
import { TutorRequirementComponent } from './component/jobtype/tutor-requirement/tutor.component';
import { LoginComponent } from './component/login/login.component';
import { OpenApplicationsComponent } from './component/open-applications/open-applications.component';
import { OpenRequirementsComponent } from './component/open-requirements/open-requirements.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: JobselectorComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'req/:req-id/1', //'req/:req-id/1',
    component: TutorRequirementComponent,
  },
  {
    path: 'app/:app-id/1',
    component: TutorApplicationComponent,
  },

  {
    path: 'req/:req-id/2', //'req/:req-id/1',
    component: TutorRequirementComponent,
  },
  {
    path: 'app/:app-id/2',
    component: TutorApplicationComponent,
  },

  {
    path: 'req/:req-id/3', //'req/:req-id/1',
    component: TutorRequirementComponent,
  },
  {
    path: 'app/:app-id/3',
    component: TutorApplicationComponent,
  },

  {
    path: 'open-reqs',
    component: OpenRequirementsComponent,
  },
  {
    path: 'fulfilled-reqs',
    component: FulfilledRequirementsComponent,
  },

  {
    path: 'open-apps',
    component: OpenApplicationsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
