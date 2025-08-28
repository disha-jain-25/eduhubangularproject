import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  student: any = null;
  showDropdown = false;
  isLoggedIn = false;

  // Random featured books
  featuredBooks = [
    { title: 'Angular Basics', author: 'John Doe', price: 499, image: 'https://picsum.photos/200/300?random=1' },
    { title: 'TypeScript Guide', author: 'Jane Smith', price: 599, image: 'https://picsum.photos/200/300?random=2' },
    { title: 'Frontend Mastery', author: 'Alice Lee', price: 699, image: 'https://picsum.photos/200/300?random=3' },
    { title: 'JavaScript Deep Dive', author: 'Bob Martin', price: 799, image: 'https://picsum.photos/200/300?random=4' },
    { title: 'React Essentials', author: 'Clara Wu', price: 599, image: 'https://picsum.photos/200/300?random=5' },
    { title: 'CSS Magic', author: 'Daniel Ray', price: 399, image: 'https://picsum.photos/200/300?random=6' },
    { title: 'Node.js in Action', author: 'Emma Stone', price: 699, image: 'https://picsum.photos/200/300?random=7' },
    { title: 'Fullstack Development', author: 'Frank Liu', price: 899, image: 'https://picsum.photos/200/300?random=8' }
  ];

  constructor(private router: Router) {
    const current = localStorage.getItem('currentStudent');
    if (current) {
      this.student = JSON.parse(current);
      this.isLoggedIn = true;
    }
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  logout() {
    localStorage.removeItem('currentStudent');
    this.router.navigate(['/login']);
    this.isLoggedIn = false;
  }
}
