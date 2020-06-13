import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceChannelComponent } from './invoice-channel.component';

describe('InvoiceChannelComponent', () => {
  let component: InvoiceChannelComponent;
  let fixture: ComponentFixture<InvoiceChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
