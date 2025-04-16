import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from 'primeng/button';
import { ButtonModule} from 'primeng/button';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './Home/landing.component';
import {AboutmeComponent} from './aboutme/aboutme.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ContactFormComponent } from './contact-form/contact-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Button, RouterOutlet,
    NavbarComponent, LandingComponent,
    ButtonModule, AboutmeComponent,AnimateOnScrollModule,ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'untitled';
}
