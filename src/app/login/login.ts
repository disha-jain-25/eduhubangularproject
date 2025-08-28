import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  loginData = { email: '', password: '' };

  constructor(private router: Router) {}

  onLogin(form: any) {
    if (form.valid) {
   
      const students = JSON.parse(localStorage.getItem('students') || '[]');


      const foundStudent = students.find(
        (s: any) => s.email === this.loginData.email && s.password === this.loginData.password
      );

      if (foundStudent) {
          localStorage.setItem('currentStudent', JSON.stringify(foundStudent));
          this.router.navigate(['/home']); 
}
 else {
        alert('Invalid Credentials');
      }
    }
  }
}
