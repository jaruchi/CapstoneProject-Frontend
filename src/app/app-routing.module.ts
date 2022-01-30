import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { JobItemComponent } from './component/job-item/job-item.component';
import { JobselectorComponent } from './component/jobselector/jobselector.component';
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
    path: 'tutor',
    component: JobItemComponent,
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
