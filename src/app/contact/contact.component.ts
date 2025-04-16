import { Component } from '@angular/core';
import {Avatar} from 'primeng/avatar';
import {AnimateOnScroll} from 'primeng/animateonscroll';
import {Button} from "primeng/button";
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [
    Avatar,
    AnimateOnScroll,
    Button,
    RouterLink
  ],
  templateUrl: './contact.component.html',
  standalone: true,
  styles: [
    `
            :host {
                @keyframes slidedown-icon {
                    0% {
                        transform: translateY(0);
                    }

                    50% {
                        transform: translateY(20px);
                    }

                    100% {
                        transform: translateY(0);
                    }
                }

                .slidedown-icon {
                    animation: slidedown-icon;
                    animation-duration: 3s;
                    animation-iteration-count: infinite;
                }

                /*.box {*/
                /*    background-image: radial-gradient(var(--primary-300), var(--primary-600));*/
                /*    border-radius: 50% !important;*/
                /*    color: var(--primary-color-text);*/
                /*}*/
            }
        `
  ]
})
export class ContactComponent {

}

//
// import { Component } from '@angular/core';
// import { AnimateOnScrollModule } from 'primeng/animateonscroll';
// import { AvatarModule } from 'primeng/avatar';
//
// @Component({
//   selector: 'app-people-cards',
//   standalone: true,
//   imports: [AnimateOnScrollModule, AvatarModule],
//   templateUrl: './people-cards.component.html',
//   styles: [`
//     :host {
//       display: block;
//       padding: 2rem;
//       background-color: #0f172a; /* dark background */
//       color: white;
//     }
//
//     .neon-card {
//       border: 2px solid transparent;
//       background-color: #1e293b;
//       border-radius: 1rem;
//       box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
//       transition: transform 0.3s ease, box-shadow 0.3s ease;
//     }
//
//     .neon-card:hover {
//       transform: scale(1.05);
//       box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
//     }
//
//     .neon-title {
//       text-shadow: 0 0 10px #0ff;
//       color: #0ff;
//     }
//   `]
// })
// export class ContactComponent {}
