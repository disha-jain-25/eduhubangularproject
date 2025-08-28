import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSellForm } from './book-sell-form';

describe('BookSellForm', () => {
  let component: BookSellForm;
  let fixture: ComponentFixture<BookSellForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookSellForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookSellForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
