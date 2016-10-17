import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { LandingComponent } from './components/landing/landing.component';
import { ApproachComponent } from './components/approach/approach.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { MemberComponent } from './components/team/team.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactComponent } from './components/contact/contact.component';
import { VacancyComponent } from './components/vacancy/vacancy.component';

export const routes:Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', component: LandingComponent, data: {'home': true}},
      {path: 'approach', component: ApproachComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'clients', component: ProjectsComponent},
      {path: 'project/:projectLink', component: ProjectComponent},
      {path: 'about', component: AboutComponent},
      {path: 'team', component: TeamComponent},
      {path: 'team/:memberId', component: MemberComponent},
      {path: 'careers', component: CareersComponent},
      {path: 'careers/:vacancyId', component: VacancyComponent},
      {path: 'contact', component: ContactComponent}
    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

export const routing = RouterModule.forRoot(routes);
