import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, DatePipe],
  templateUrl: './transactions.html',
  styleUrls: ['./transactions.css']
})
export class Transactions implements OnInit {
  transactions: any[] = [];

  ngOnInit() {
    // Load transactions from localStorage
    const saved = localStorage.getItem('transactions');
    this.transactions = saved ? JSON.parse(saved) : [];
  }

  clearTransactions() {
    localStorage.removeItem('transactions');
    this.transactions = [];
  }
}
