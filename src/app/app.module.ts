import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeProfileComponent } from './home-profile/home-profile.component';
import { ProfileNavBarComponent } from './home-profile/profile-nav-bar/profile-nav-bar.component';
import { ProfileContainerComponent } from './home-profile/profile-container/profile-container.component';
import { ExperienceContainerComponent } from './home-profile/experience-container/experience-container.component';
import { JobContainerComponent } from './home-profile/experience-container/job-container/job-container.component';
import { EducationContainerComponent } from './home-profile/education-container/education-container.component';
import { LanguagesContainerComponent } from './home-profile/languages-container/languages-container.component';
import { ProfessionalSkillsContainerComponent } from './home-profile/professional-skills-container/professional-skills-container.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from '@angular/cdk/clipboard';
import {MatDialogModule} from '@angular/material/dialog';
import { ContactModelComponent } from './home-profile/profile-nav-bar/contact-model/contact-model.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeProfileComponent,
    ProfileNavBarComponent,
    ProfileContainerComponent,
    ExperienceContainerComponent,
    JobContainerComponent,
    EducationContainerComponent,
    LanguagesContainerComponent,
    ProfessionalSkillsContainerComponent,
    ContactModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    ClipboardModule,
    MatDialogModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
