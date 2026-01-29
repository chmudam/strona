import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  mobileMenuOpen = false;
  mobileProfileOpen = false;
  profileSubOpen = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  toggleMobileProfile(): void {
    this.mobileProfileOpen = !this.mobileProfileOpen;
  }

  toggleProfileSub(): void {
    this.profileSubOpen = !this.profileSubOpen;
  }

  handleLogout(): void {
    window.location.href = '/';
  }
}
