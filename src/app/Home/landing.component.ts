
import {Component, OnInit, OnDestroy} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DigitalClockComponent} from '../components/digital-clock/digital-clock.component';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, DigitalClockComponent, Button],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit, OnDestroy {
  quotes: string[] = [
    '“Simplicity is the soul of efficiency.” – Austin Freeman',
    '“First, solve the problem. Then, write the code.” – John Johnson',
    "My code doesn’t work. I have no idea why",
    '“Programs must be written for people to read.” – Harold Abelson',
    "Commit often, push rarely.",

    "The best way to predict the future is to implement it.",

    '“Code is like humor. When you have to explain it, it’s bad.” – Cory House'
  ];

  currentQuote: string = this.quotes[0];
  private quoteInterval: any;

  ngOnInit() {
    // Automatically cycle quotes every 10 seconds
    this.quoteInterval = setInterval(() => {
      this.currentQuote = this.getRandomQuote();
    }, 8000);
  }

  ngOnDestroy() {
    if (this.quoteInterval) {
      clearInterval(this.quoteInterval);
    }
  }

  getRandomQuote(): string {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[randomIndex];
  }
}
