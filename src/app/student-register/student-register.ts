import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-register',
  standalone: true, 
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './student-register.html',
  styleUrls: ['./student-register.css']
})
export class StudentRegister {
  student = {
    name: '',
    email: '',
    password: '',
    course: ''
  };

  constructor(private router: Router) {}

 onRegister(form: NgForm) {
  if (form.valid) {
    let students = JSON.parse(localStorage.getItem('students') || '[]');

    // check if email already exists
    const exists = students.find((s: any) => s.email === this.student.email);
    if (exists) {
      alert('Email already registered! Please login.');
      return;
    }

    // push new student
    students.push({ ...this.student, registeredAt: new Date() });
    localStorage.setItem('students', JSON.stringify(students));

    // store last registered user (optional)
    localStorage.setItem('lastRegistered', JSON.stringify(this.student));

    // show success message
    alert('Registration Successful! Please login to continue.');

    // reset the form
    form.resetForm();

    // redirect to login
    this.router.navigate(['/login']);
  }else{
    alert('Please fill all required fields ❌');
  }
}

}
