import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './Home/landing.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ContactComponent} from './contact/contact.component';
import {NgModule} from '@angular/core';
import {AboutmeComponent} from './aboutme/aboutme.component';
import {ProjectsComponent} from './projects/projects.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: LandingComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'aboutme', component: AboutmeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'projects', component: ProjectsComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
