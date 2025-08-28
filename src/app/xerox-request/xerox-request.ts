import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-xerox-request',
  standalone: true,
  imports: [FormsModule, CommonModule, CurrencyPipe],
  templateUrl: './xerox-request.html',
  styleUrls: ['./xerox-request.css']
})
export class XeroxRequest {
  price: number | null = null;
  errorMessage: string | null = null;  
  successMessage: string | null = null; 

  requestXerox(data: any) {
  const pages = Number(data.pages);

  if (isNaN(pages) || pages <= 0) {
    this.price = null;
    this.errorMessage = '❌ Please enter a valid positive number of pages';
    this.successMessage = null;
    setTimeout(() => this.errorMessage = null, 3000);
    return;
  }

  let totalPrice = pages * 2;

  const user = JSON.parse(localStorage.getItem('user') || '{}');
  if (user.subscribed) {
    totalPrice = totalPrice * 0.8; 
  }

  // ✅ Save transaction to localStorage
  let transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
  transactions.push({
    type: 'Xerox',
    amount: totalPrice,      // <-- fixed
    item: `${pages} pages`,
    date: new Date()
  });
  localStorage.setItem('transactions', JSON.stringify(transactions));

  this.price = totalPrice;

  this.successMessage = `✅ Xerox request for ${pages} pages submitted successfully!`;
  this.errorMessage = null;
  setTimeout(() => this.successMessage = null, 3000);
}

}
