import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './module/material/material.module';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { JobselectorComponent } from './component/jobselector/jobselector.component';
import { RequirementTileComponent } from './component/requirement-tile/requirement-tile.component';
import { ApplicationTileComponent } from './component/application-tile/application-tile.component';
import { RequirementCardComponent } from './component/requirement-card/requirement-card.component';
import { ApplicationCardComponent } from './component/application-card/application-card.component';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './component/login/login.component';
import { TutorRequirementComponent } from './component/jobtype/tutor-requirement/tutor.component';
import { TutorApplicationComponent } from './component/jobtype/tutor-application/tutor.component';
import { OpenApplicationsComponent } from './component/open-applications/open-applications.component';
import { OpenRequirementsComponent } from './component/open-requirements/open-requirements.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './component/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    JobselectorComponent,
    RequirementTileComponent,
    ApplicationTileComponent,
    RequirementCardComponent,
    ApplicationCardComponent,
    LoginComponent,
    TutorApplicationComponent,
    TutorRequirementComponent,
    OpenApplicationsComponent,
    OpenRequirementsComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
