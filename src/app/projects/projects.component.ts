

import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Button} from 'primeng/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-project-cards',
  standalone: true,
  imports: [CommonModule, Button, RouterLink],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {
  projects = [
    {
      id: 3,
      title: 'Lukatchy – E-Commerce Platform',
      details: `
        <p><strong>Duration:</strong> Mar 2022 – Nov 2022</p>
        <p class="font-bold">A full-featured e-commerce web application developed for Lukatchy, a fashion retail company, to showcase apparel collections, manage inventory, and facilitate online transactions.</p>
        <li> Built the frontend using Angular and PrimeNG to enable seamless browsing of fashion items and efficient order placement</p>
       <li>  Developed RESTful APIs with Spring Boot to manage product catalogs, customer orders, and inventory tracking</p>
        <li> Integrated Stripe API for secure and reliable payment processing</p>
       <li>  Employed a hybrid database setup using MongoDB for flexible product data storage and MySQL for order management</p>
        <li> Designed an administrative panel with real-time reporting and exportable insights (CSV/PDF)</li>
        <li> Utilized Docker to containerize backend microservices, enabling smooth deployment and scaling</li>`
    },
    {
      id: 1,
      title: 'PostBank Jumuisha Project',
      details: `

        <p><strong>Duration:</strong> March 2023 – December 2024</p>
        <p class="font-bold" >The project involves implementation of modern banking solutions like mobile banking,
        Internet Banking, Agency Banking, and management portals. I have been involved in various processes in the implementation as listed:</p>

        <li> Implementation of Enterprise Service Bus</p>
        <li> Database design and management</p>
        <li> Development of REST APIs using Spring Boot</p>
        <li> Security measures of APIs using Spring Security, handshakes, and dynamic encryption</p>
        <li> API unit testing using Spring dependencies such as Mockito</p>
        <li> Source Code versioning using Git</p>
        <li>Integration of third-party remittances such as Western Union</p>
        <li> Mobile application security using Google’s Play Integrity API</p>
        <li> Continuous Integration / Continuous Deployment practices</p>`
    },
    {
      id: 2,
      title: 'Ngumo Sawmill Website',
      details: `
        <p><strong>Duration:</strong> Jan 2024 – Mar 2024</p>
        <p class="font-bold">This project was a full-stack solution developed for a timber processing business in Kenya. It served as a client-facing website and a back-office tool for product management and communication.</p>
        <li class=> Frontend built using Angular 19 with PrimeNG and PrimeFlex for responsive UI</p>
        <li> Backend developed in Spring Boot with RESTful APIs</p>
        <li> Authentication and admin dashboard for managing timber inventory and orders</p>
        <li> Responsive design optimized for both desktop and mobile</p>
        <li> Integration with messaging system for customer inquiries</p>
        <li> Source control with Git and GitHub</p>
        <li> Deployed using Vercel and Spring Boot hosted backend</p>`
    },
    {
      id: 4,
      title: ' Why You Should Work With Me ',
      details: `
<!--        <h3>Project 4</h3>-->
<!--        <p>E-commerce platform with modern design.</p>-->
<!--        <p>- Placeholder for additional details</p>-->
   I’m a developer with a solid foundation in both frontend and backend technologies, and I love bringing a mix of technical know-how and creativity to every project.
    From Angular and JavaScript to Java, Spring Boot, and Tailwind CSS, along with databases like MySQL and MongoDB, I’m equipped to handle all aspects of your project – from the first line of code to the finished product.

But I’m not just about writing code – I’m about solving problems and creating solutions that work. I thrive in fast-paced environments and always aim to build intuitive, user-friendly interfaces and solid backend systems. Attention to detail and a commitment to quality are key to how I approach my work, and I always go the extra mile to make sure the results speak for themselves.

I’m passionate about staying on top of the latest technologies and continuously improving my skills. If you’re looking for someone who’s not just technically skilled but also passionate about delivering impactful, seamless solutions, I’d love to work with you!`
    }
  ];

  @ViewChild('particleCanvas') particleCanvas!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    console.log('View initialized, starting particle animation...');
    this.createParticleAnimation();
  }

  flipCard(event: MouseEvent, id: number) {
    const cardElement = event.currentTarget as HTMLElement;
    if (cardElement) {
      cardElement.classList.toggle('flipped');
      setTimeout(() => {
        cardElement.classList.add('animate');
      }, 50);
      setTimeout(() => {
        cardElement.classList.remove('animate');
      }, 700);
    } else {
      console.error('Card not found with ID:', id);
    }
  }

  createParticleAnimation() {
    if (!this.particleCanvas) {
      console.error('Particle canvas not found!');
      return;
    }

    const canvas = this.particleCanvas.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d')!;
    const particles: any[] = [];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 0.2 - 0.45;
        this.speedY = Math.random() * 0.2 - 0.45;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.y += Math.sin(this.x / 50) * 2;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgb(52,123,189)';
        ctx.fillStyle = 'rgb(245,242,242)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0;
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    });

    animate();
  }
}
