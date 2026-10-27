import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { ProjectDetailsComponent } from './project-details.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { AboutUsComponent } from './features/about-us/about-us.component';

export const routes: Routes = [
  { path: 'properties/:slug', component: ProjectDetailsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: '', component: HomePageComponent },
  { path: '**', redirectTo: '' }
];
