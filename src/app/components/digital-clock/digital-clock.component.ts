import { Component } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  template: `<h2 class="clock">{{ time }}</h2>`,
  standalone: true,  // ✅ Ensure this is true
  styles: [`
    .clock {
      font-family: 'Orbitron', sans-serif;
      font-size: 2rem;
      text-align: center;
    }
  `]
})
export class DigitalClockComponent {
  time: string = '';

  constructor() {
    setInterval(() => {
      const now = new Date();
      this.time = now.toLocaleTimeString();
    }, 1000);
  }
}
