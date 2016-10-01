import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { LandingComponent } from './components/landing/landing.component';
import { ServicesComponent } from './components/services/services.component';
import { TeamComponent } from './components/team/team.component';

export const routes:Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', component: LandingComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'team', component: TeamComponent}
    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

export const routing = RouterModule.forRoot(routes);
