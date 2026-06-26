import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section-padding" style="background-color: var(--bg-light);">
      <div class="container">
        <div class="text-center" style="margin-bottom: 4rem;">
          <h2 style="margin-bottom: 1rem;">Industries We Serve</h2>
          <p style="max-width: 600px; margin: 0 auto; font-size: 1.125rem;">
            Versox is built to adapt. Whether you're a small retailer or a large manufacturer, our platform scales with you.
          </p>
        </div>

        <div class="industries-grid">
          <div class="industry-card" *ngFor="let ind of industries">
            <div class="industry-image" [style.backgroundImage]="ind.bg"></div>
            <div class="industry-content">
              <h3>{{ ind.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .text-center {
      text-align: center;
    }
    .industries-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
    @media (min-width: 768px) {
      .industries-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    .industry-card {
      position: relative;
      border-radius: 16px;
      overflow: hidden;
      height: 200px;
      background: #1C1E21;
      cursor: default;
      box-shadow: var(--shadow-sm);
      transition: var(--transition);
    }
    .industry-card:hover {
      box-shadow: var(--shadow-lg);
      transform: translateY(-4px);
    }
    .industry-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      opacity: 0.6;
      transition: var(--transition);
    }
    .industry-card:hover .industry-image {
      opacity: 0.8;
      transform: scale(1.05);
    }
    .industry-content {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 1.5rem;
      background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
    }
    .industry-content h3 {
      color: white;
      margin: 0;
      font-size: 1.25rem;
    }
  `]
})
export class IndustriesComponent {
  industries = [
    { title: 'Retail Stores', bg: 'linear-gradient(45deg, #FF6B6B, #FF8E53)' },
    { title: 'Hardware Shops', bg: 'linear-gradient(45deg, #4E65FF, #92EFFD)' },
    { title: 'Distributors', bg: 'linear-gradient(45deg, #11998e, #38ef7d)' },
    { title: 'Wholesalers', bg: 'linear-gradient(45deg, #8E2DE2, #4A00E0)' },
    { title: 'Manufacturing Units', bg: 'linear-gradient(45deg, #F2994A, #F2C94C)' },
    { title: 'Trading Businesses', bg: 'linear-gradient(45deg, #00B4DB, #0083B0)' }
  ];
}
