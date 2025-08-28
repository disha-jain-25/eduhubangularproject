import { Routes } from '@angular/router';
import { Login } from './login/login';
import { XeroxRequest } from './xerox-request/xerox-request';
import { Transactions } from './transactions/transactions';
import { StudentRegister } from './student-register/student-register';
import { BookSellForm } from './book-sell-form/book-sell-form';
import { BookBuyForm } from './book-buy-form/book-buy-form';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { StudentProfile } from './student-profile/student-profile';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: StudentRegister },
  { path: 'profile', component: StudentProfile },
  { path: 'home', component: Home },
  { path: 'sell', component: BookSellForm },
  { path: 'buy', component: BookBuyForm },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'xerox', component: XeroxRequest },
  { path: 'transactions', component: Transactions }
];
