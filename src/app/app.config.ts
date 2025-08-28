import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { Login } from './login/login';
import { StudentRegister } from './student-register/student-register';
import { StudentProfile } from './student-profile/student-profile';
import { BookSellForm } from './book-sell-form/book-sell-form';
import { BookBuyForm } from './book-buy-form/book-buy-form';
import { XeroxRequest } from './xerox-request/xerox-request';
import { Transactions } from './transactions/transactions';
import { Home } from './home/home';
import { About} from './about/about';
import { Contact } from './contact/contact';
const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: StudentRegister },
  { path: 'profile', component: StudentProfile },
  { path: 'sell', component: BookSellForm },
  { path: 'buy', component: BookBuyForm },
  { path: 'xerox', component: XeroxRequest },
  { path: 'transactions', component: Transactions },
  { path: 'home', component: Home },  
  { path: 'about', component: About },      
  { path: 'contact', component: Contact},
  { path: '', redirectTo: '/login', pathMatch: 'full' } 
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()]
  
};
