import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private subscribed = false;
  private subscriptionDate: Date | null = null;

  subscribe() {
    this.subscribed = true;
    this.subscriptionDate = new Date();
  }

  unsubscribe() {
    this.subscribed = false;
    this.subscriptionDate = null;
  }

  isSubscribed(): boolean {
    return this.subscribed;
  }

  setSubscriptionDate(date: Date) {
    this.subscriptionDate = date;
  }

  getSubscriptionDate(): Date | null {
    return this.subscriptionDate;
  }

  getDiscountedPrice(price: number): number {
    return this.subscribed ? price * 0.9 : price;
  }
}
