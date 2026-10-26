import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { ProjectDetailsComponent } from './project-details.component';

export const routes: Routes = [
  { path: 'properties/:slug', component: ProjectDetailsComponent },
  { path: '', component: HomePageComponent },
  { path: '**', redirectTo: '' }
];
