import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobselectorComponent } from './component/jobselector/jobselector.component';
import { TutorApplicationComponent } from './component/jobtype/tutor-application/tutor.component';
import { TutorRequirementComponent } from './component/jobtype/tutor-requirement/tutor.component';
import { LoginComponent } from './component/login/login.component';
import { RequirementTileComponent } from './component/requirement-tile/requirement-tile.component';

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
    path: 'tutor-req',
    component: TutorRequirementComponent,
  },
  {
    path: 'tutor-app',
    component: TutorApplicationComponent
  },
  {
    path: 'open-reqs',
    component: RequirementTileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
