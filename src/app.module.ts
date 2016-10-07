import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ng2PageScrollModule } from 'ng2-page-scroll/src/ng2-page-scroll.module.ts';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';

import { TopMenuComponent } from './shared/top-menu/top-menu.component';
import { HamburgerMenuComponent } from './shared/hamburger-menu/hamburger-menu.component';
import { FooterComponent } from './shared/footer/footer.component';

import { LandingComponent } from './components/landing/landing.component';
import { ApproachComponent } from './components/approach/approach.component';
import { ServicesComponent } from './components/services/services.component';
import { ClientsComponent } from './components/clients/clients.component';
import { BlogComponent } from './components/blog/blog.component';
import { EventsComponent } from './components/events/events.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactComponent } from './components/contact/contact.component';

import { ProjectPreviewComponent } from './partials/projects-list/projects-list.component';
import { ProjectsListComponent } from './partials/projects-list/projects-list.component';

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
    ClientsComponent,
    ProjectPreviewComponent,
    ProjectsListComponent,
    BlogComponent,
    EventsComponent,
    AboutComponent,
    TeamComponent,
    CareersComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2PageScrollModule,
    Ng2BootstrapModule
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
