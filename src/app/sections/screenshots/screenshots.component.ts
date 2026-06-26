import { Component } from '@angular/core';

@Component({
  selector: 'app-screenshots',
  standalone: true,
  template: `
    <section class="section-padding" style="background-color: var(--bg-light); text-align: center;">
      <div class="container">
        <h2 style="margin-bottom: 1rem;">Experience the Platform</h2>
        <p style="margin-bottom: 3rem; color: var(--text-muted);">A beautiful, intuitive dashboard designed for speed and clarity.</p>
        
        <div class="glass-card" style="padding: 1rem; display: inline-block; width: 100%; max-width: 1000px;">
          <img src="/versox.in_dashboard.png" alt="Versox Dashboard Preview" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); display: block;">
        </div>
      </div>
    </section>
  `
})
export class ScreenshotsComponent { }
