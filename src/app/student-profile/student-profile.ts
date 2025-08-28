import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SubscriptionService } from '../subscription';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.html',
  styleUrls: ['./student-profile.css'],
  imports: [CommonModule,RouterModule]
})
export class StudentProfile implements OnInit {
  student: any = null;
  coursePrice: number = 1000;
  discountedPrice: number = 0;
  subscribed: boolean = false;
  subscriptionDate: Date | null = null;
  canUnsubscribe: boolean = false;

  constructor(
    private router: Router,
    private subscriptionService: SubscriptionService
  ) {}

  ngOnInit() {
  const storedStudent = localStorage.getItem('currentStudent'); // <-- change here
  if (storedStudent) {
    this.student = JSON.parse(storedStudent);
  } else {
    this.router.navigate(['/login']);
    return;
  }

  this.subscribed = this.subscriptionService.isSubscribed();
  this.subscriptionDate = this.subscriptionService.getSubscriptionDate();
  this.updateDiscountedPrice();
  this.checkUnsubscribeWindow();
}


  subscribe() {
    this.subscriptionService.subscribe();
    this.subscriptionDate = new Date();
    this.subscriptionService.setSubscriptionDate(this.subscriptionDate);
    this.subscribed = true;
    this.updateDiscountedPrice();
    this.checkUnsubscribeWindow();
  }

  unsubscribe() {
    if (this.canUnsubscribe) {
      this.subscriptionService.unsubscribe();
      this.subscribed = false;
      this.subscriptionDate = null;
      this.updateDiscountedPrice();
      this.canUnsubscribe = false;
    } else {
      alert('You can unsubscribe only within 3 days of subscribing.');
    }
  }

  updateDiscountedPrice() {
    this.discountedPrice = this.subscriptionService.getDiscountedPrice(this.coursePrice);
  }

  checkUnsubscribeWindow() {
    if (this.subscriptionDate) {
      const now = new Date();
      const diffTime = now.getTime() - new Date(this.subscriptionDate).getTime();
      const diffDays = diffTime / (1000 * 3600 * 24);
      this.canUnsubscribe = diffDays <= 3;
    } else {
      this.canUnsubscribe = false;
    }
  }

  logout() {
  localStorage.removeItem('currentStudent');
  this.subscriptionService.unsubscribe();
  this.router.navigate(['/login']);
}

}
