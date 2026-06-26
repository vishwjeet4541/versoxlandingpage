import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  template: `
<section id="pricing" class="pricing-section section-padding">
  <div class="container">
    <div class="pricing-header">
      <h2>Simple & Transparent Pricing</h2>
      <p>Choose the perfect plan for your business. No hidden charges. Upgrade anytime.</p>
    </div>

    <!-- Toggle -->
    <div class="billing-toggle">
      <span class="toggle-text" [class.active]="!isYearly()">Monthly</span>
      <label class="switch">
        <input type="checkbox" [checked]="isYearly()" (change)="toggleBilling()">
        <span class="slider round"></span>
      </label>
      <span class="toggle-text" [class.active]="isYearly()">
        Annually <span class="badge badge-save">Save 2 Months</span>
      </span>
    </div>

    <!-- Cards -->
    <div class="pricing-cards">
      @for (plan of plans; track plan.name) {
        <div class="pricing-card" [class.popular]="plan.popular" [class.inactive]="!plan.popular && isYearly() && false">
          @if (plan.popular) {
            <div class="popular-badge">★ Most Popular</div>
          }
          <div class="card-header">
            <h3>{{ plan.name }}</h3>
            <p class="desc">{{ plan.desc }}</p>
            <div class="price">
              <span class="currency">₹</span>
              <span class="amount">{{ isYearly() ? plan.yearlyPrice : plan.monthlyPrice }}</span>
              <span class="period">/{{ isYearly() ? 'year' : 'month' }}</span>
            </div>
            @if (isYearly()) {
              <div class="savings-text">Save 2 Months</div>
            }
          </div>
          <div class="card-body">
            <ul class="features-list">
              @for (feat of plan.features; track feat.text) {
                <li [class.not-included]="!feat.included">
                  <span class="icon" style="display: inline-flex; align-items: center;">
                    @if (feat.included) {
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1877F2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    } @else {
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    }
                  </span>
                  <span class="text">{{ feat.text }}</span>
                </li>
              }
            </ul>
          </div>
          <div class="card-footer">
            <a [href]="plan.ctaLink" class="btn w-100" [class.btn-primary]="plan.popular" [class.btn-outline]="!plan.popular">{{ plan.ctaText }}</a>
          </div>
        </div>
      }
    </div>

    <!-- Pricing Notes -->
    <div class="pricing-notes">
      <div class="note-item" style="display: flex; align-items: center; gap: 8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> No setup fees</div>
      <div class="note-item" style="display: flex; align-items: center; gap: 8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> No hidden charges</div>
      <div class="note-item" style="display: flex; align-items: center; gap: 8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Cancel anytime</div>
      <div class="note-item" style="display: flex; align-items: center; gap: 8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Secure cloud platform</div>
      <div class="note-item" style="display: flex; align-items: center; gap: 8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Regular feature updates</div>
      <div class="note-item" style="display: flex; align-items: center; gap: 8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Free onboarding assistance</div>
    </div>

    <!-- Comparison Table -->
    <div class="comparison-section">
      <h3>Feature Comparison Table</h3>
      <p class="comparison-subtitle">Compare every feature clearly.</p>
      <div class="table-responsive glass-card">
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th class="text-center">Starter</th>
              <th class="text-center">Business</th>
              <th class="text-center">Growth</th>
            </tr>
          </thead>
          <tbody>
            @for (feature of comparisonFeatures; track feature.name) {
              <tr>
                <td class="text-left font-medium">{{ feature.name }}</td>
                <td class="text-center text-muted">
                  @if (feature.starter === true) {
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1877F2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  } @else if (feature.starter === false) {
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  } @else {
                    {{ feature.starter }}
                  }
                </td>
                <td class="text-center font-medium primary-color">
                  @if (feature.business === true) {
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1877F2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  } @else if (feature.business === false) {
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  } @else {
                    {{ feature.business }}
                  }
                </td>
                <td class="text-center text-muted">
                  @if (feature.growth === true) {
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1877F2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  } @else if (feature.growth === false) {
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  } @else {
                    {{ feature.growth }}
                  }
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>

    <!-- FAQ -->
    <div class="faq-section">
      <h3>Frequently Asked Questions</h3>
      <div class="faq-container glass-card">
        @for (faq of faqs; track faq.q) {
          <div class="faq-item">
            <h4>{{ faq.q }}</h4>
            <p>{{ faq.a }}</p>
          </div>
        }
      </div>
    </div>

    <!-- Bottom CTA -->
    <div class="bottom-cta">
      <h2>Ready to simplify your business?</h2>
      <p>Start managing Inventory, GST Billing, Purchases and Expenses from one platform.</p>
      <a href="#contact" class="btn btn-primary cta-btn">Start Free Trial</a>
    </div>
  </div>
</section>
  `,
  styles: [`
    .pricing-section {
      background-color: var(--bg-light);
      font-family: var(--font-family);
    }
    .pricing-header {
      text-align: center;
      max-width: 600px;
      margin: 0 auto 3rem auto;
    }
    .pricing-header h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: var(--text-dark);
    }
    .pricing-header p {
      font-size: 1.1rem;
      color: var(--text-muted);
    }
    
    .billing-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 4rem;
    }
    .toggle-text {
      font-size: 1.1rem;
      font-weight: 500;
      color: var(--text-muted);
      transition: var(--transition);
    }
    .toggle-text.active {
      color: var(--text-dark);
    }
    .badge-save {
      background: rgba(24, 119, 242, 0.1);
      color: var(--primary);
      padding: 0.2rem 0.6rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 700;
      margin-left: 0.5rem;
    }

    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #cbd5e1;
      transition: .4s;
    }
    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    input:checked + .slider {
      background-color: var(--primary);
    }
    input:checked + .slider:before {
      transform: translateX(26px);
    }
    .slider.round {
      border-radius: 34px;
    }
    .slider.round:before {
      border-radius: 50%;
    }

    .pricing-cards {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto 3rem auto;
    }
    @media (min-width: 992px) {
      .pricing-cards {
        grid-template-columns: repeat(3, 1fr);
        align-items: start;
      }
    }
    
    .pricing-card {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
      border: 1px solid var(--border-color);
      border-radius: 24px;
      padding: 2.5rem;
      box-shadow: var(--shadow-sm);
      transition: var(--transition);
      position: relative;
      display: flex;
      flex-direction: column;
    }
    .pricing-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-lg);
    }
    .pricing-card.popular {
      border: 2px solid var(--primary);
      box-shadow: var(--shadow-md);
      background: #fff;
      transform: scale(1.02);
    }
    .pricing-card.popular:hover {
      transform: scale(1.02) translateY(-8px);
      box-shadow: 0 20px 40px rgba(24, 119, 242, 0.15);
    }
    @media (max-width: 991px) {
      .pricing-card.popular {
        transform: none;
      }
      .pricing-card.popular:hover {
        transform: translateY(-8px);
      }
    }
    
    .popular-badge {
      position: absolute;
      top: -16px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--primary);
      color: #fff;
      padding: 0.4rem 1.2rem;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 700;
      box-shadow: 0 4px 10px rgba(24, 119, 242, 0.3);
      white-space: nowrap;
      z-index: 2;
    }

    .card-header {
      margin-bottom: 1.5rem;
    }
    .card-header h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
    .card-header .desc {
      font-size: 0.9rem;
      min-height: 4rem;
      color: var(--text-muted);
    }
    .price {
      margin-top: 1rem;
      display: flex;
      align-items: baseline;
    }
    .price .currency {
      font-size: 1.5rem;
      font-weight: 700;
    }
    .price .amount {
      font-size: 3rem;
      font-weight: 900;
      color: var(--text-dark);
      margin: 0 0.2rem;
    }
    .price .period {
      color: var(--text-muted);
      font-weight: 500;
    }
    .savings-text {
      color: #10B981;
      font-size: 0.9rem;
      font-weight: 600;
      margin-top: 0.5rem;
    }

    .card-body {
      flex-grow: 1;
      margin-bottom: 2rem;
    }
    .features-prefix {
      font-weight: 600;
      font-size: 0.95rem;
      color: var(--text-dark);
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid var(--border-color);
    }
    .features-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .features-list li {
      margin-bottom: 0.8rem;
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      font-size: 0.95rem;
      color: var(--text-dark);
    }
    .icon.check {
      font-size: 1.1rem;
    }
    .features-list li.not-included {
      opacity: 0.5;
      text-decoration: line-through;
    }
    .features-list li.not-included .icon {
      filter: grayscale(1);
    }
    .w-100 { width: 100%; text-align: center; }
    
    .pricing-notes {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5rem;
      margin-bottom: 5rem;
    }
    .note-item {
      color: var(--text-muted);
      font-weight: 500;
      font-size: 0.95rem;
    }

    .comparison-section {
      max-width: 1000px;
      margin: 0 auto 5rem auto;
    }
    .comparison-section h3 {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
    .comparison-subtitle {
      text-align: center;
      color: var(--text-muted);
      margin-bottom: 2rem;
    }
    .comparison-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.95rem;
    }
    .comparison-table th, .comparison-table td {
      padding: 1rem;
      border-bottom: 1px solid var(--border-color);
    }
    .comparison-table th {
      font-weight: 700;
      color: var(--text-dark);
      position: sticky;
      top: 0;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(8px);
      z-index: 1;
    }
    .comparison-table td {
      color: var(--text-dark);
    }
    .comparison-table th.text-center, .comparison-table td.text-center {
      text-align: center;
    }
    .comparison-table tbody tr:hover {
      background-color: rgba(24, 119, 242, 0.05);
    }
    .comparison-table td:first-child {
      font-weight: 500;
    }
    .table-responsive {
      overflow-x: auto;
    }
    
    .faq-section {
      max-width: 800px;
      margin: 0 auto 5rem auto;
    }
    .faq-section h3 {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 2rem;
    }
    .faq-container {
      overflow: hidden;
      border-radius: 16px;
    }
    .faq-item {
      padding: 1.5rem;
      border-bottom: 1px solid var(--border-color);
    }
    .faq-item:last-child {
      border-bottom: none;
    }
    .faq-item h4 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: var(--text-dark);
    }
    .faq-item p {
      color: var(--text-muted);
      margin: 0;
    }
    
    .bottom-cta {
      max-width: 900px;
      margin: 0 auto;
      background: linear-gradient(135deg, var(--primary), #0c4a9e);
      padding: 4rem 2rem;
      border-radius: 24px;
      text-align: center;
      color: white;
      box-shadow: var(--shadow-lg);
    }
    .bottom-cta h2 {
      color: white;
      margin-bottom: 1rem;
      font-size: 2.2rem;
    }
    .bottom-cta p {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.15rem;
      margin-bottom: 2rem;
    }
    .cta-btn {
      background-color: white;
      color: var(--primary);
      padding: 1rem 2.5rem;
      font-size: 1.1rem;
      text-decoration: none;
      display: inline-block;
      font-weight: 600;
      border-radius: 8px;
    }
    .cta-btn:hover {
      background-color: #f8fafc;
      transform: translateY(-3px);
    }
  `]
})
export class PricingComponent {
  isYearly = signal(false);

  toggleBilling() {
    this.isYearly.set(!this.isYearly());
  }

  plans = [
    {
      name: 'Starter',
      monthlyPrice: '299',
      yearlyPrice: '2,999',
      desc: 'Perfect for small shops, startups, retailers, traders, electrical shops and growing businesses.',
      features: [
        { text: 'Unlimited Products', included: true },
        { text: 'Unlimited GST Invoices', included: true },
        { text: 'Unlimited Non-GST Invoices', included: true },
        { text: 'Unlimited Customers', included: true },
        { text: 'Unlimited Suppliers', included: true },
        { text: 'Inventory Management', included: true },
        { text: 'Purchase Management', included: true },
        { text: 'Expense Tracking', included: true },
        { text: 'Customer Ledger', included: true },
        { text: 'Supplier Ledger', included: true },
        { text: 'Profit & Loss Dashboard', included: true },
        { text: 'GSTR-1 Ready Sales Report', included: true },
        { text: 'Purchase GST Report', included: true },
        { text: 'Stock Management', included: true },
        { text: 'Dashboard Analytics', included: true },
        { text: 'Cloud Based', included: true },
        { text: 'Automatic Updates', included: true },
        { text: '1 Warehouse', included: true },
        { text: 'Up to 2 Users', included: true },
        { text: 'Email Support', included: true },
        { text: 'Stock Transfers', included: false },
        { text: 'Low Stock Alerts', included: false },
        { text: 'Advanced Reports & Analytics', included: false },
        { text: 'Excel Export', included: false },
        { text: 'PDF Export', included: false },
        { text: 'Role & Permission Management', included: false },
        { text: 'Custom Invoice Branding', included: false },
        { text: 'Audit Logs', included: false },
        { text: 'API Access (Coming Soon)', included: false },
        { text: 'Dedicated Onboarding', included: false },
        { text: 'Future Premium Features', included: false }
      ],
      ctaText: 'Start Free Trial',
      ctaLink: '#contact',
      popular: false
    },
    {
      name: 'Business',
      monthlyPrice: '699',
      yearlyPrice: '6,999',
      desc: 'Perfect for Growing Businesses, Wholesalers, Distributors & Contractors',
      features: [
        { text: 'Unlimited Products', included: true },
        { text: 'Unlimited GST Invoices', included: true },
        { text: 'Unlimited Non-GST Invoices', included: true },
        { text: 'Unlimited Customers', included: true },
        { text: 'Unlimited Suppliers', included: true },
        { text: 'Inventory Management', included: true },
        { text: 'Purchase Management', included: true },
        { text: 'Expense Tracking', included: true },
        { text: 'Customer Ledger', included: true },
        { text: 'Supplier Ledger', included: true },
        { text: 'Profit & Loss Dashboard', included: true },
        { text: 'GSTR-1 Ready Sales Report', included: true },
        { text: 'Purchase GST Report', included: true },
        { text: 'Stock Management', included: true },
        { text: 'Dashboard Analytics', included: true },
        { text: 'Cloud Based', included: true },
        { text: 'Automatic Updates', included: true },
        { text: 'Up to 10 Warehouses', included: true },
        { text: 'Up to 10 Users', included: true },
        { text: 'Priority Email & WhatsApp Support', included: true },
        { text: 'Stock Transfers', included: true },
        { text: 'Low Stock Alerts', included: true },
        { text: 'Advanced Reports & Analytics', included: true },
        { text: 'Excel Export', included: true },
        { text: 'PDF Export', included: true },
        { text: 'Role & Permission Management', included: false },
        { text: 'Custom Invoice Branding', included: false },
        { text: 'Audit Logs', included: false },
        { text: 'API Access (Coming Soon)', included: false },
        { text: 'Dedicated Onboarding', included: false },
        { text: 'Future Premium Features', included: false }
      ],
      ctaText: 'Start Free Trial',
      ctaLink: '#contact',
      popular: true
    },
    {
      name: 'Growth',
      monthlyPrice: '1,299',
      yearlyPrice: '12,999',
      desc: 'Perfect for Manufacturers, Distributors, Multi-Branch Businesses & Enterprises',
      features: [
        { text: 'Unlimited Products', included: true },
        { text: 'Unlimited GST Invoices', included: true },
        { text: 'Unlimited Non-GST Invoices', included: true },
        { text: 'Unlimited Customers', included: true },
        { text: 'Unlimited Suppliers', included: true },
        { text: 'Inventory Management', included: true },
        { text: 'Purchase Management', included: true },
        { text: 'Expense Tracking', included: true },
        { text: 'Customer Ledger', included: true },
        { text: 'Supplier Ledger', included: true },
        { text: 'Profit & Loss Dashboard', included: true },
        { text: 'GSTR-1 Ready Sales Report', included: true },
        { text: 'Purchase GST Report', included: true },
        { text: 'Stock Management', included: true },
        { text: 'Dashboard Analytics', included: true },
        { text: 'Cloud Based', included: true },
        { text: 'Automatic Updates', included: true },
        { text: 'Unlimited Warehouses', included: true },
        { text: 'Unlimited Users', included: true },
        { text: 'Priority Email & WhatsApp Support', included: true },
        { text: 'Stock Transfers', included: true },
        { text: 'Low Stock Alerts', included: true },
        { text: 'Advanced Reports & Analytics', included: true },
        { text: 'Excel Export', included: true },
        { text: 'PDF Export', included: true },
        { text: 'Role & Permission Management', included: true },
        { text: 'Custom Invoice Branding', included: true },
        { text: 'Audit Logs', included: true },
        { text: 'API Access (Coming Soon)', included: true },
        { text: 'Dedicated Onboarding', included: true },
        { text: 'Future Premium Features', included: true }
      ],
      ctaText: 'Contact Sales',
      ctaLink: '#contact',
      popular: false
    }
  ];

  comparisonFeatures = [
    { name: 'Unlimited GST Billing', starter: true, business: true, growth: true },
    { name: 'Unlimited Non-GST Billing', starter: true, business: true, growth: true },
    { name: 'Unlimited Products', starter: true, business: true, growth: true },
    { name: 'Inventory Management', starter: true, business: true, growth: true },
    { name: 'Purchase Management', starter: true, business: true, growth: true },
    { name: 'Expense Tracking', starter: true, business: true, growth: true },
    { name: 'Customer Ledger', starter: true, business: true, growth: true },
    { name: 'Supplier Ledger', starter: true, business: true, growth: true },
    { name: 'Profit & Loss', starter: true, business: true, growth: true },
    { name: 'GSTR-1 Ready Report', starter: true, business: true, growth: true },
    { name: 'Purchase GST Report', starter: true, business: true, growth: true },
    { name: 'Warehouse Management', starter: '1', business: 'Up to 10', growth: 'Unlimited' },
    { name: 'Users', starter: '2', business: 'Up to 10', growth: 'Unlimited' },
    { name: 'Stock Transfer', starter: false, business: true, growth: true },
    { name: 'Low Stock Alerts', starter: false, business: true, growth: true },
    { name: 'Advanced Reports', starter: false, business: true, growth: true },
    { name: 'Excel/PDF Export', starter: false, business: true, growth: true },
    { name: 'Role & Permission', starter: false, business: false, growth: true },
    { name: 'Custom Invoice Branding', starter: false, business: false, growth: true },
    { name: 'Audit Logs', starter: false, business: false, growth: true },
    { name: 'API Access', starter: 'Coming Soon', business: 'Coming Soon', growth: true },
    { name: 'Priority Support', starter: false, business: true, growth: true }
  ];

  faqs = [
    { q: 'Are invoices unlimited?', a: 'Yes. All plans include unlimited GST and Non-GST invoices.' },
    { q: 'Can I manage inventory?', a: 'Yes.' },
    { q: 'Does it include GST reports?', a: 'Yes. GSTR-1 Ready Sales Report and Purchase GST Report are included.' },
    { q: 'Can I upgrade later?', a: 'Yes. Upgrade anytime without losing your data.' },
    { q: 'Is my data secure?', a: 'Yes. Your data is securely stored in the cloud.' }
  ];
}
