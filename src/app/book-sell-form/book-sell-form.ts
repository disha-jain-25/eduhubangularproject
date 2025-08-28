import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-sell-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-sell-form.html',
  styleUrls: ['./book-sell-form.css']
})
export class BookSellForm {
  book = { bookName: '', year: '', price: null, type: '' };
  successMessage: string | null = null; 
  onSell(form: NgForm) {
    if (form.valid) {
      let books = JSON.parse(localStorage.getItem('books') || '[]');
      books.push(this.book);
      localStorage.setItem('books', JSON.stringify(books));

      const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
  transactions.push({
    type: 'Book Sell',
    amount: this.book.price,
    item: this.book.bookName,
    date: new Date()
  });
  localStorage.setItem('transactions', JSON.stringify(transactions));
  
      this.successMessage = '✅ Book Sell Successfully!';

      setTimeout(() => {
        this.successMessage = null;
      }, 3000);

      form.resetForm();
    }
  }
}
