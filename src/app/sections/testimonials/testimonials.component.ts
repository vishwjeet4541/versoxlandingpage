import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  template: `
    <section class="section-padding" style="background-color: white; text-align: center;">
      <div class="container">
        <h2 style="margin-bottom: 3rem;">Loved by Business Owners</h2>
        
        <div class="testimonials-grid" style="display: grid; gap: 2rem; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
          <div class="glass-card" style="padding: 2rem; text-align: left;">
            <div style="color: #f59e0b; font-size: 1.5rem; margin-bottom: 1rem;">★★★★★</div>
            <p style="font-size: 1.125rem; font-style: italic; margin-bottom: 1.5rem;">"Versox completely transformed how we manage our warehouse. The GST billing is incredibly fast."</p>
            <div>
              <strong>Rajesh Kumar</strong><br/>
              <span style="color: var(--text-muted); font-size: 0.875rem;">Retail Owner</span>
            </div>
          </div>
          
          <div class="glass-card" style="padding: 2rem; text-align: left;">
            <div style="color: #f59e0b; font-size: 1.5rem; margin-bottom: 1rem;">★★★★★</div>
            <p style="font-size: 1.125rem; font-style: italic; margin-bottom: 1.5rem;">"We used to struggle with stock discrepancies. Since switching to Versox, our inventory is 100% accurate."</p>
            <div>
              <strong>Amit Singh</strong><br/>
              <span style="color: var(--text-muted); font-size: 0.875rem;">Distributor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TestimonialsComponent {}
