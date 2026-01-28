import { Component, HostListener } from '@angular/core';
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
  
  // Hide on scroll
  visible = true;
  lastScrollY = 0;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > this.lastScrollY && currentScrollY > 80) {
      // Scrolling down - hide navbar
      this.visible = false;
    } else {
      // Scrolling up - show navbar
      this.visible = true;
    }
    
    this.lastScrollY = currentScrollY;
  }

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
    // Demo logout - redirect to home
    window.location.href = '/';
  }
}
