import { Routes } from '@angular/router';
import { JsConcurencyComponent } from './js-concurency/js-concurency.component';
import { LicensePlateComponent } from './license-plate/license-plate.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/js-concurency',
    pathMatch: 'full',
  },
  { path: 'js-concurency', component: JsConcurencyComponent },
  { path: 'license-plate', component: LicensePlateComponent}
];
