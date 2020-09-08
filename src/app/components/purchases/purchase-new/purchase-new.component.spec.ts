import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { PurchaseNewComponent } from './purchase-new.component';

describe('NewPurchaseComponent', () => {
  let component: PurchaseNewComponent;
  let fixture: ComponentFixture<PurchaseNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [FormBuilder],
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

  it('user should update from form changes', () => {
    const testUser = {
      marketplace: 'Albert Heijn',
      currency: 'EUR'
    };
    component.newPurchase.controls.marketplace.setValue(testUser.marketplace);
    component.newPurchase.controls.currency.setValue(testUser.currency);
    expect(component.newPurchase.value.marketplace).toBe(testUser.marketplace);
  });

  it('should insert new item in purchaseItems form group', () => {
    expect(component.newPurchase.value.items.length).toBe(1);
    component.showNewItem();
    expect(component.newPurchase.value.items.length).toBe(2);
  });

  it('should remove item in purchaseItems form group', () => {
    component.showNewItem();
    component.showNewItem();
    expect(component.newPurchase.value.items.length).toBe(3);
    component.removeNewItem(1);
    expect(component.newPurchase.value.items.length).toBe(2);
  });

  it('should clean note value on cleanPurchaseNote', () => {
    const text = 'some text to test the function';
    component.newPurchase.value.note = text;
    expect(component.newPurchase.value.note).toBe(text);

    component.cleanPurchaseNote();
    expect(component.newPurchase.value.note).toBeNull();
  });

  it('should set default category correctly', () => {
    const categoryText = 'Bakery';
    component.newPurchase.value.items[0].category = categoryText;
    component.setDefaultCategory(categoryText);
    component.showNewItem();
    expect(component.newPurchase.value.items[1].category).toBe(categoryText);
  });
});
