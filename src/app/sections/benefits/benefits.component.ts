import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="benefits" class="section-padding" style="background: white;">
      <div class="container">
        <div class="benefits-layout">
          <div class="benefits-image">
            <div class="glass-card mockup-card-alt">
              <div class="mockup-header-alt">Overview</div>
              <div class="mockup-chart-alt"></div>
              <div class="mockup-stats">
                <div class="stat"><span>+45%</span> Efficiency</div>
                <div class="stat"><span>-30%</span> Manual Work</div>
              </div>
            </div>
          </div>
          <div class="benefits-content">
            <h2 style="margin-bottom: 1.5rem;">Why choose Versox?</h2>
            <div class="benefit-item" *ngFor="let benefit of benefits">
              <div class="benefit-check">✓</div>
              <div class="benefit-text">
                <h4>{{ benefit.title }}</h4>
                <p>{{ benefit.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .benefits-layout {
      display: grid;
      grid-template-columns: 1fr;
      gap: 4rem;
      align-items: center;
    }
    @media (min-width: 1024px) {
      .benefits-layout {
        grid-template-columns: 1fr 1fr;
      }
    }
    .benefits-content h2 {
      font-size: 2.5rem;
    }
    .benefit-item {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    .benefit-check {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--primary-light);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .benefit-text h4 {
      font-size: 1.125rem;
      margin-bottom: 0.25rem;
    }
    .benefit-text p {
      font-size: 0.9375rem;
      margin: 0;
    }
    
    /* Mockup Alt */
    .mockup-card-alt {
      padding: 2rem;
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
      border-radius: 20px;
    }
    .mockup-header-alt {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 2rem;
    }
    .mockup-chart-alt {
      height: 200px;
      background: var(--primary-light);
      border-radius: 12px;
      margin-bottom: 2rem;
      position: relative;
      overflow: hidden;
    }
    .mockup-chart-alt::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 60%;
      background: linear-gradient(to top, rgba(24,119,242,0.2) 0%, transparent 100%);
    }
    .mockup-stats {
      display: flex;
      gap: 1rem;
    }
    .stat {
      flex: 1;
      background: white;
      padding: 1rem;
      border-radius: 12px;
      font-size: 0.875rem;
      color: var(--text-muted);
      box-shadow: var(--shadow-sm);
    }
    .stat span {
      display: block;
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--text-dark);
      margin-bottom: 0.25rem;
    }
    .stat:first-child span { color: #10b981; }
  `]
})
export class BenefitsComponent {
  benefits = [
    { title: 'Reduce Manual Work', desc: 'Automate repetitive tasks like data entry, invoicing, and inventory updates.' },
    { title: 'Real-Time Tracking', desc: 'Know exactly what you have, where it is, and what you need to reorder instantly.' },
    { title: 'Faster GST Billing', desc: 'Create accurate GST-compliant invoices in under 30 seconds.' },
    { title: 'Better Visibility', desc: 'Gain complete control with dashboards that show your true business health.' },
    { title: 'Easy Stock Management', desc: 'Eliminate stockouts and overstocking with intelligent reorder points.' }
  ];
}
