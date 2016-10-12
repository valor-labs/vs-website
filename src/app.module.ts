import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { CarouselModule } from 'ng2-bootstrap/components/carousel';
import { Ng2PageScrollModule } from 'ng2-page-scroll/src/ng2-page-scroll.module.ts';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';

import { TopMenuComponent } from './shared/top-menu/top-menu.component';
import { HamburgerMenuComponent } from './shared/hamburger-menu/hamburger-menu.component';
import { FooterComponent } from './shared/footer/footer.component';

import { LandingComponent } from './components/landing/landing.component';
import { ApproachComponent } from './components/approach/approach.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactComponent } from './components/contact/contact.component';

import { ProjectPreviewComponent, ProjectsListComponent } from './partials/projects-list/projects-list.component';
import { FeedbackComponent } from './partials/feedback/feedback.component';
import { ProjectDetailsComponent } from './partials/project-details/project-details.component';

import { MainService } from './services/main.service';
import { ProjectsService } from './services/projects.service';
import { ConfigProvider } from './services/config.service';

import { routing } from './router.config';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    HamburgerMenuComponent,
    FooterComponent,
    MainComponent,

    LandingComponent,
    ApproachComponent,
    ServicesComponent,
    ProjectsComponent,
    ProjectComponent,
    AboutComponent,
    TeamComponent,
    CareersComponent,
    ContactComponent,

    ProjectPreviewComponent,
    ProjectsListComponent,
    FeedbackComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2PageScrollModule,
    CarouselModule
  ],

  providers: [
    MainService,
    ConfigProvider,
    ProjectsService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],

  bootstrap: [AppComponent]
})

export class AppModule {
}
