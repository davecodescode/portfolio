import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { CardModule } from 'primeng/card';
import {Panel} from 'primeng/panel';
import {Button} from 'primeng/button';
import {RouterLink} from '@angular/router';
@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [CommonModule, CardModule, Panel, Button, RouterLink],
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
  animations: [
    trigger('skillFade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('1000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AboutmeComponent implements OnInit {
  projectCount = 0;
  yearsCount = 0;
  techCount = 0;
  ngOnInit() {
    this.animateCount('projectCount', 0, 5, 1500); // 5+ projects
    this.animateCount('yearsCount', 0, 3, 1500);   // 3+ years
    this.animateCount('techCount', 0, 8, 1500);
  }
  animateCount(prop: string, start: number, end: number, duration: number) {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      (this as any)[prop] = Math.floor(progress * (end - start) + start);
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }
}
