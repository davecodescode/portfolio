


import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  imports: [
    Menubar,
    RouterModule,
    ButtonModule
  ],
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;
  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: ['/home'],
        styleClass: this.isActive('/home') ? 'active-menu' : ''
      },
      {
        label: 'About Me',
        icon: 'pi pi-star',
        routerLink: ['/aboutme'],
        styleClass: this.isActive('/aboutme') ? 'active-menu' : ''
      },
      {
        label: 'Projects',
        icon: 'pi pi-folder',
        routerLink: ['/projects'],
        styleClass: this.isActive('/projects') ? 'active-menu' : ''
      },
      // {
      //   label: 'Skills',
      //   icon: 'pi pi-folder',
      //   routerLink: ['/skills'],
      //   styleClass: this.isActive('/skills') ? 'active-menu' : ''
      // },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        routerLink: ['/contact'],
        styleClass: this.isActive('/contact') ? 'active-menu' : ''
      }
    ];

    // Listen for route changes
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
      this.updateActiveMenu();
    });
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  updateActiveMenu() {
    this.items?.forEach(item => {
      item.styleClass = this.isActive(item.routerLink?.toString() || '') ? 'active-menu' : '';
    });
  }
}
