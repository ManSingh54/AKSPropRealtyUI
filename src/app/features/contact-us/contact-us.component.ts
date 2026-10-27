import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';

  sendInquiry() {
    const phoneNumber = '919811002135'; // Your WhatsApp number
    const text = `Hello AKS PropRealty, I am ${this.name}. My phone: ${this.phone}, Email: ${this.email}. Message: ${this.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    // window.open(url, '_blank');
  }
}
