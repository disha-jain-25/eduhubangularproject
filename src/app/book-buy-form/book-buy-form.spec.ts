import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBuyForm } from './book-buy-form';

describe('BookBuyForm', () => {
  let component: BookBuyForm;
  let fixture: ComponentFixture<BookBuyForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookBuyForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookBuyForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
