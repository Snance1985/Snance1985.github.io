import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { JobdetailsComponent } from './components/jobdetails/jobdetails.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'homepage', component: HomeComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'experience/:jobId', component: JobdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
