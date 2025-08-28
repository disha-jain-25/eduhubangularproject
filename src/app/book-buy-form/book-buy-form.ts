import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-book-buy-form',
  standalone: true,
  imports: [FormsModule, CommonModule, CurrencyPipe],
  templateUrl: './book-buy-form.html',
  styleUrls: ['./book-buy-form.css']
})
export class BookBuyForm {
  bookName = '';
  foundBook: any = null;
  message = '';
  successMessage = '';

  searchBook() {
    const books = JSON.parse(localStorage.getItem('books') || '[]');
    this.foundBook = books.find(
      (b: any) => b.bookName.toLowerCase() === this.bookName.toLowerCase()
    );

    if (!this.foundBook) {
      this.message = '❌ Book not found!';
      this.successMessage = '';
    } else {
      this.message = '';
    }
  }

buyBook(form: NgForm) {
  if (!this.foundBook) {
    this.message = '❌ Cannot buy: Book not found!';
    return;
  }

  this.successMessage = `🎉 You bought "${this.foundBook.bookName}" successfully!`;

  // Save transaction
  const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
  transactions.push({
    type: 'Buy Book',
    item: this.foundBook.bookName,
    amount: this.foundBook.price,
    date: new Date()
  });
  localStorage.setItem('transactions', JSON.stringify(transactions));

  form.resetForm();
  this.foundBook = null;
  this.bookName = '';
}


}
