import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section id="contact" class="section-padding" style="background-color: white;">
      <div class="container">
        <div class="contact-layout">
          <div class="contact-info">
            <h2 style="margin-bottom: 1rem;">Get in Touch</h2>
            <p style="font-size: 1.125rem; color: var(--text-muted); margin-bottom: 2rem;">
              Have questions or need a custom quote? Fill out the form and our team will get back to you shortly.
            </p>
            <div style="margin-bottom: 1rem;">
              <strong>Email:</strong> support&#64;versox.in
            </div>
            <div>
              <strong>Sales:</strong> +91 9881717477
            </div>
          </div>
          
          <div class="contact-form-container glass-card">
            <h3 style="margin-bottom: 1.5rem;">Request a Demo</h3>
            
            <div *ngIf="successMessage" class="alert alert-success">
              {{ successMessage }}
            </div>
            <div *ngIf="errorMessage" class="alert alert-error">
              {{ errorMessage }}
            </div>
            
            <form [formGroup]="inquiryForm" (ngSubmit)="onSubmitInquiry()" class="contact-form">
              <div class="form-group">
                <label for="name">Name <span class="required">*</span></label>
                <input id="name" type="text" formControlName="name" class="form-control" placeholder="A*** S*****">
                <div class="error-text" *ngIf="inquiryForm.get('name')?.touched && inquiryForm.get('name')?.invalid">
                  Name is required.
                </div>
              </div>
              
              <div class="form-group">
                <label for="email">Email <span class="required">*</span></label>
                <input id="email" type="email" formControlName="email" class="form-control" placeholder="a***t@domain.com">
                <div class="error-text" *ngIf="inquiryForm.get('email')?.touched && inquiryForm.get('email')?.invalid">
                  Valid email is required.
                </div>
              </div>
              
              <div class="form-group">
                <label for="phone">Phone Number <span class="required">*</span></label>
                <input id="phone" type="tel" formControlName="phone" class="form-control" placeholder="+91 98XXXXXX10">
                <div class="error-text" *ngIf="inquiryForm.get('phone')?.touched && inquiryForm.get('phone')?.invalid">
                  Valid phone number is required (10-15 digits).
                </div>
              </div>
              
              <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;" [disabled]="isLoading || inquiryForm.invalid">
                {{ isLoading ? 'Submitting...' : 'Submit Inquiry' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-layout {
      display: grid;
      grid-template-columns: 1fr;
      gap: 4rem;
      align-items: center;
    }
    @media (min-width: 768px) {
      .contact-layout {
        grid-template-columns: 1fr 1fr;
      }
    }
    .contact-form-container {
      padding: 2.5rem;
      background: white;
      border: 1px solid var(--border-color);
    }
    .form-group {
      margin-bottom: 1.5rem;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: var(--text-dark);
    }
    .required { color: #ef4444; }
    .form-control {
      width: 100%;
      padding: 0.75rem 1rem;
      border: 1px solid var(--border-color);
      border-radius: 8px;
      font-size: 1rem;
      font-family: var(--font-family);
      transition: var(--transition);
    }
    .form-control:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 3px var(--primary-light);
    }
    .error-text {
      color: #ef4444;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }
    .alert {
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 1.5rem;
      font-weight: 500;
    }
    .alert-success {
      background-color: #d1fae5;
      color: #065f46;
      border: 1px solid #10b981;
    }
    .alert-error {
      background-color: #fee2e2;
      color: #991b1b;
      border: 1px solid #ef4444;
    }
  `]
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  inquiryForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]]
  });

  isLoading = false;
  successMessage = '';
  errorMessage = '';

  onSubmitInquiry() {
    if (this.inquiryForm.valid) {
      this.isLoading = true;
      this.successMessage = '';
      this.errorMessage = '';
      
      let requestBody: any = this.inquiryForm.value;
      const enableEncryption = true;
      const encryptionKey = 'itvtrtr474wdy';

      if (enableEncryption) {
        try {
          const dataString = JSON.stringify(requestBody);
          const encryptedPayload = CryptoJS.AES.encrypt(dataString, encryptionKey).toString();
          requestBody = { payload: encryptedPayload };
        } catch (e) {
          console.error('Encryption failed', e);
          this.errorMessage = 'An error occurred while preparing your inquiry.';
          this.isLoading = false;
          return;
        }
      }
      
      this.http.post(`${environment.apiUrl}/inquiries`, requestBody).subscribe({
        next: (res: any) => {
          this.isLoading = false;
          this.successMessage = res.message || 'Inquiry submitted successfully! We will contact you soon.';
          this.inquiryForm.reset();
        },
        error: (err) => {
          this.isLoading = false;
          this.errorMessage = err.error?.message || 'Failed to submit inquiry. Please try again.';
        }
      });
    }
  }
}
