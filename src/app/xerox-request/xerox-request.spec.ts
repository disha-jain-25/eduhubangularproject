import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XeroxRequest } from './xerox-request';

describe('XeroxRequest', () => {
  let component: XeroxRequest;
  let fixture: ComponentFixture<XeroxRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XeroxRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XeroxRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
