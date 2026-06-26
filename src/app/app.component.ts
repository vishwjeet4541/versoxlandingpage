import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeroComponent } from './sections/hero/hero.component';
import { FeaturesComponent } from './sections/features/features.component';
import { IndustriesComponent } from './sections/industries/industries.component';
import { BenefitsComponent } from './sections/benefits/benefits.component';
import { ScreenshotsComponent } from './sections/screenshots/screenshots.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';
import { PricingComponent } from './sections/pricing/pricing.component';
import { ContactComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    FeaturesComponent,
    IndustriesComponent,
    BenefitsComponent,
    ScreenshotsComponent,
    TestimonialsComponent,
    PricingComponent,
    ContactComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-features></app-features>
      <app-industries></app-industries>
      <app-benefits></app-benefits>
      <app-screenshots></app-screenshots>
      <app-testimonials></app-testimonials>
      <app-pricing></app-pricing>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    main {
      padding-top: 72px; /* Height of fixed navbar */
    }
  `]
})
export class AppComponent implements OnInit {
  constructor(
    private meta: Meta, 
    private title: Title,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.title.setTitle('Versox - Smart Inventory & GST Billing Software');
    this.meta.addTags([
      { name: 'description', content: 'Manage inventory, purchases, sales, warehouses, GST invoices, and business operations from a single platform.' },
      { name: 'keywords', content: 'Inventory Management Software, GST Billing Software, Warehouse Management Software, Stock Management Software, Inventory Software India, GST Invoice Software' },
      { property: 'og:title', content: 'Versox - Smart Inventory & GST Billing Software' },
      { property: 'og:description', content: 'Smart Inventory & Warehouse Management for Growing Businesses.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://versox.in' }
    ]);
    this.addJsonLd();
  }

  addJsonLd() {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Versox",
      "operatingSystem": "Web",
      "applicationCategory": "BusinessApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR"
      },
      "description": "Manage inventory, purchases, sales, warehouses, GST invoices, and business operations from a single platform."
    };

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    this.document.head.appendChild(script);
  }
}
