import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './module/material/material.module';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { JobselectorComponent } from './component/jobselector/jobselector.component';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './component/login/login.component';
import { TutorRequirementComponent } from './component/jobtype/tutor-requirement/tutor.component';
import { TutorApplicationComponent } from './component/jobtype/tutor-application/tutor.component';
import { OpenApplicationsComponent } from './component/open-applications/open-applications.component';
import { OpenRequirementsComponent } from './component/open-requirements/open-requirements.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './component/register/register.component';
import { FulfilledRequirementsComponent } from './component/fulfilled-requirements/fulfilled-requirements.component';
import { FulfilledApplicationsComponent } from './component/fulfilled-applications/fulfilled-applications.component';
import { PetCareApplicationComponent } from './component/jobtype/pet-care-application/pet-care-application.component';
import { PetCareRequirementComponent } from './component/jobtype/pet-care-requirement/pet-care-requirement.component';
import { BabySitRequirementComponent } from './component/jobtype/baby-sit-requirement/baby-sit-requirement.component';
import { BabySitApplicationComponent } from './component/jobtype/baby-sit-application/baby-sit-application.component';
import { GardenCareApplicationComponent } from './component/jobtype/garden-care-application/garden-care-application.component';
import { GardenCareRequirementComponent } from './component/jobtype/garden-care-requirement/garden-care-requirement.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    JobselectorComponent,
    LoginComponent,
    TutorApplicationComponent,
    TutorRequirementComponent,
    OpenApplicationsComponent,
    OpenRequirementsComponent,
    RegisterComponent,
    FulfilledRequirementsComponent,
    FulfilledApplicationsComponent,
    PetCareApplicationComponent,
    PetCareRequirementComponent,
    BabySitRequirementComponent,
    BabySitApplicationComponent,
    GardenCareApplicationComponent,
    GardenCareRequirementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
