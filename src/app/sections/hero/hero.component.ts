import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero">
      <!-- Background Elements -->
      <div class="hero-glow"></div>
      
      <div class="container hero-container animate-fade-in-up">
        <div class="hero-content">
          <div class="badge" style="display: inline-flex; align-items: center; gap: 6px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            New: AI-Powered Demand Forecasting
          </div>
          <h1>
            Smart Inventory & <br />
            <span class="text-gradient">GST Billing Software</span> <br />
            for Growing Businesses
          </h1>
          <p class="hero-subtitle">
            Manage inventory, purchases, sales, warehouses, GST invoices, and business operations from a single platform.
          </p>
          <div class="hero-actions">
            <a href="#contact" class="btn btn-primary btn-lg">Start Free Trial</a>
            <a href="#contact" class="btn btn-outline btn-lg" style="background: white;">Request Demo</a>
          </div>
          <div class="hero-trust">
            <p>No credit card required • 14-day free trial • Cancel anytime</p>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="glass-card mockup-card">
            <!-- Mockup Placeholder -->
            <div class="mockup-header">
              <div class="mockup-dots"><span></span><span></span><span></span></div>
              <div class="mockup-url">app.versox.in</div>
            </div>
            <div class="mockup-body">
              <div class="mockup-sidebar"></div>
              <div class="mockup-main">
                <div class="mockup-chart"></div>
                <div class="mockup-grid">
                  <div class="mockup-item"></div>
                  <div class="mockup-item"></div>
                  <div class="mockup-item"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding: 160px 0 100px;
      position: relative;
      overflow: hidden;
      background-color: var(--bg-light);
    }
    .hero-glow {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(24,119,242,0.15) 0%, rgba(24,119,242,0) 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 0;
    }
    .hero-container {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: 1fr;
      gap: 4rem;
      align-items: center;
    }
    @media (min-width: 1024px) {
      .hero-container {
        grid-template-columns: 1fr 1fr;
      }
    }
    .hero-content {
      text-align: left;
    }
    .badge {
      display: inline-block;
      padding: 0.5rem 1rem;
      background: var(--primary-light);
      color: var(--primary);
      border-radius: 50px;
      font-weight: 600;
      font-size: 0.875rem;
      margin-bottom: 1.5rem;
      border: 1px solid rgba(24,119,242,0.2);
    }
    .text-gradient {
      background: linear-gradient(135deg, var(--primary) 0%, #0d52b3 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hero-subtitle {
      font-size: 1.125rem;
      margin: 1.5rem 0 2.5rem;
      color: var(--text-muted);
      max-width: 500px;
    }
    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 2rem;
    }
    .btn-lg {
      padding: 1rem 2rem;
      font-size: 1.125rem;
    }
    .hero-trust p {
      font-size: 0.875rem;
      color: var(--text-muted);
    }
    
    /* Mockup Visual */
    .mockup-card {
      padding: 0;
      overflow: hidden;
      border-radius: 12px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
      transition: var(--transition);
    }
    .mockup-card:hover {
      transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
    }
    .mockup-header {
      background: #f1f5f9;
      padding: 0.75rem 1rem;
      display: flex;
      align-items: center;
      border-bottom: 1px solid var(--border-color);
    }
    .mockup-dots {
      display: flex;
      gap: 6px;
    }
    .mockup-dots span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #cbd5e1;
    }
    .mockup-dots span:nth-child(1) { background: #ef4444; }
    .mockup-dots span:nth-child(2) { background: #f59e0b; }
    .mockup-dots span:nth-child(3) { background: #10b981; }
    .mockup-url {
      flex: 1;
      text-align: center;
      font-size: 0.75rem;
      color: var(--text-muted);
      background: white;
      margin: 0 2rem;
      padding: 0.25rem;
      border-radius: 4px;
    }
    .mockup-body {
      display: flex;
      height: 350px;
      background: white;
    }
    .mockup-sidebar {
      width: 25%;
      background: #f8fafc;
      border-right: 1px solid var(--border-color);
    }
    .mockup-main {
      flex: 1;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .mockup-chart {
      height: 120px;
      background: linear-gradient(135deg, var(--primary-light) 0%, rgba(24,119,242,0) 100%);
      border-radius: 8px;
      border: 1px dashed var(--primary);
    }
    .mockup-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      flex: 1;
    }
    .mockup-item {
      background: #f1f5f9;
      border-radius: 8px;
    }
  `]
})
export class HeroComponent {}
