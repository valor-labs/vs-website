import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
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

export const routes:Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', component: LandingComponent},
      {path: 'approach', component: ApproachComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'clients', component: ClientsComponent},
      {path: 'blog', component: BlogComponent},
      {path: 'events', component: EventsComponent},
      {path: 'about', component: AboutComponent},
      {path: 'team', component: TeamComponent},
      {path: 'careers', component: CareersComponent},
      {path: 'contact', component: ContactComponent}
    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

export const routing = RouterModule.forRoot(routes);
