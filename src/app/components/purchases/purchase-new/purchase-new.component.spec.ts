import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseNewComponent } from './purchase-new.component';

describe('NewPurchaseComponent', () => {
  let component: PurchaseNewComponent;
  let fixture: ComponentFixture<PurchaseNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
