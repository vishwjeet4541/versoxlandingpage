import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="features" class="section-padding" style="background: white;">
      <div class="container">
        <div class="text-center" style="margin-bottom: 4rem;">
          <h2 style="margin-bottom: 1rem;">Everything You Need</h2>
          <p style="max-width: 600px; margin: 0 auto; font-size: 1.125rem;">
            A complete suite of tools to manage your entire business operations efficiently.
          </p>
        </div>

        <div class="features-grid">
          <div class="feature-card" *ngFor="let feature of features">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .text-center {
      text-align: center;
    }
    .features-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    @media (min-width: 640px) {
      .features-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 1024px) {
      .features-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    .feature-card {
      padding: 2rem;
      border-radius: 16px;
      background: var(--bg-light);
      border: 1px solid var(--border-color);
      transition: var(--transition);
      cursor: default;
    }
    .feature-card:hover {
      background: white;
      box-shadow: var(--shadow-lg);
      transform: translateY(-5px);
      border-color: var(--primary-light);
    }
    .feature-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background: var(--primary-light);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
    .feature-card h3 {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
    }
    .feature-card p {
      font-size: 0.9375rem;
      line-height: 1.5;
    }
  `]
})
export class FeaturesComponent {
  features = [
    { icon: '📦', title: 'Inventory Management', description: 'Real-time stock tracking, variants, and automated reorder alerts.' },
    { icon: '🧾', title: 'GST Billing', description: 'Generate compliant GST invoices in seconds with custom templates.' },
    { icon: '🛒', title: 'Purchase Management', description: 'Handle POs, supplier bills, and inward stock seamlessly.' },
    { icon: '📈', title: 'Sales Management', description: 'Manage quotations, sales orders, and dispatches effortlessly.' },
    { icon: '🏢', title: 'Warehouse Management', description: 'Multi-location tracking, bin management, and stock transfers.' },
    { icon: '👥', title: 'Supplier & Customer', description: 'Complete CRM for managing ledgers and relationships.' },
    { icon: '📊', title: 'Reports & Analytics', description: 'Actionable insights with dynamic dashboards and exports.' },
    { icon: '🔐', title: 'Multi-user Access', description: 'Role-based access controls for your entire team.' },
    { icon: '☁️', title: 'Cloud Based System', description: 'Secure, reliable, and accessible from anywhere, anytime.' }
  ];
}
