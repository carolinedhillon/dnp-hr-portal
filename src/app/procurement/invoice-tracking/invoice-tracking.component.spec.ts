import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceTrackingComponent } from './invoice-tracking.component';

describe('InvoiceTrackingComponent', () => {
  let component: InvoiceTrackingComponent;
  let fixture: ComponentFixture<InvoiceTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
