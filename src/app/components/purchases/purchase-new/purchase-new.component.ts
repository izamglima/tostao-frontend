import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchase-new',
  templateUrl: './purchase-new.component.html'
})
export class PurchaseNewComponent implements OnInit {
  public newPurchase: FormGroup;
  public purchaseItems: FormArray;
  noteToggle = false;
  defaultCategory = '';

  constructor(private formBuilder: FormBuilder) { }

  addNewItem(): FormGroup {
    return this.formBuilder.group({
      product: [null, Validators.compose([Validators.required])],
      quantity: [null, Validators.compose([Validators.required])],
      price: [null, Validators.compose([Validators.required])],
      category: [this.defaultCategory, Validators.compose([Validators.required])]
    });
  }

  // insert a new item in purchaseItems form group
  showNewItem(): void {
    this.purchaseItems.push(this.addNewItem());
  }

  // remove item in purchaseItems from group
  removeNewItem(index): void {
    this.purchaseItems.removeAt(index);
  }

  get purchaseItemsFormGroup(): FormArray {
    return this.newPurchase.get('items') as FormArray;
  }

  cleanPurchaseNote(): void {
    this.newPurchase.patchValue({note: null});
  }

  setDefaultCategory(value): void {
    this.defaultCategory = value;
  }

  ngOnInit(): void {
    this.newPurchase = this.formBuilder.group({
      marketplace: [null, Validators.compose([Validators.required])],
      currency: [null, Validators.compose([Validators.required])],
      date: [null, Validators.compose([Validators.required])],
      note: [null],
      items: this.formBuilder.array([this.addNewItem()])
    });
    console.log(this.newPurchase.value.items.length);
    // set purchaseItems to the form control containing items
    this.purchaseItems = this.newPurchase.get('items') as FormArray;
  }

  onSubmit(): void {
    console.log(this.newPurchase.value);
  }
}
