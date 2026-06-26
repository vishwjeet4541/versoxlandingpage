import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="cta-banner">
        <div class="container text-center">
          <h2>Ready to Simplify Your Inventory Management?</h2>
          <p>Join thousands of businesses streamlining their operations with Versox.</p>
          <a href="#contact" class="btn btn-primary" style="margin-top: 1.5rem;">Start Free Trial &rarr;</a>
        </div>
      </div>
      
      <div class="container footer-content">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="logo">
              <div class="logo-icon">V</div>
              <span class="logo-text" style="color: white;">VERSOX</span>
            </div>
            <p>Smart Inventory & GST Billing Software for Growing Businesses.</p>
          </div>
          <div class="footer-links">
            <h4>Quick Links</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact Us</a>
          </div>
          <div class="footer-links">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2026 Versox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: #0b0f19;
      color: #9ca3af;
      position: relative;
    }
    .cta-banner {
      background: linear-gradient(135deg, var(--primary) 0%, #0d52b3 100%);
      color: white;
      padding: 4rem 0;
      position: relative;
      overflow: hidden;
    }
    .cta-banner h2 {
      color: white;
      margin-bottom: 1rem;
    }
    .cta-banner p {
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.125rem;
    }
    .text-center {
      text-align: center;
    }
    .footer-content {
      padding: 5rem 1.5rem 2rem;
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
      margin-bottom: 4rem;
    }
    @media (min-width: 768px) {
      .footer-grid {
        grid-template-columns: 2fr 1fr 1fr;
      }
    }
    .footer-brand p {
      margin-top: 1rem;
      max-width: 300px;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .logo-icon {
      width: 32px;
      height: 32px;
      background: var(--primary);
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
      letter-spacing: -0.02em;
    }
    .footer-links h4 {
      color: white;
      margin-bottom: 1.5rem;
    }
    .footer-links a {
      display: block;
      color: #9ca3af;
      text-decoration: none;
      margin-bottom: 0.75rem;
      transition: var(--transition);
    }
    .footer-links a:hover {
      color: var(--primary);
      transform: translateX(4px);
    }
    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 2rem;
      text-align: center;
      font-size: 0.875rem;
    }
  `]
})
export class FooterComponent {}
