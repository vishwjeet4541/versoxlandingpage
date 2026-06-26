import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="navbar">
      <div class="container nav-container">
        <div class="logo">
          <div class="logo-icon">V</div>
          <span class="logo-text">VERSOX</span>
        </div>
        <nav class="nav-links">
          <a href="#features">Features</a>
          <a href="#benefits">Benefits</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div class="nav-actions">
          <a href="#contact" class="btn btn-primary">Start Free Trial</a>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border-color);
      z-index: 1000;
      transition: var(--transition);
    }
    .nav-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 72px;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
    }
    .logo-icon {
      width: 32px;
      height: 32px;
      background: linear-gradient(135deg, var(--primary) 0%, #0d52b3 100%);
      border-radius: 8px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 1.2rem;
    }
    .logo-text {
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--text-dark);
      letter-spacing: -0.02em;
    }
    .nav-links {
      display: none;
      gap: 2rem;
    }
    .nav-links a {
      color: var(--text-muted);
      text-decoration: none;
      font-weight: 500;
      transition: var(--transition);
    }
    .nav-links a:hover {
      color: var(--primary);
    }
    .nav-actions {
      display: none;
    }
    @media (min-width: 768px) {
      .nav-links { display: flex; }
      .nav-actions { display: flex; align-items: center; }
    }
  `]
})
export class NavbarComponent {}
