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
  showNewItem() {
    this.purchaseItems.push(this.addNewItem());
  }

  // remove item in purchaseItems from group
  removeNewItem(index) {
    this.purchaseItems.removeAt(index);
  }

  get purchaseItemsFormGroup() {
    return this.newPurchase.get('items') as FormArray;
  }

  cleanPurchaseNote() {
    this.newPurchase.patchValue({'note':null});
  }

  setDefaultCategory(e) {
    this.defaultCategory = e.target.value;
  }

  ngOnInit(): void {
    this.newPurchase = this.formBuilder.group({
      marketplace: [null, Validators.compose([Validators.required])],
      currency: [null, Validators.compose([Validators.required])],
      date: [null, Validators.compose([Validators.required])],
      note: [null],
      items: this.formBuilder.array([this.addNewItem()])
    });

    // set purchaseItems to the form control containing items
    this.purchaseItems = this.newPurchase.get('items') as FormArray;
  }

  onSubmit() {
    console.log(this.newPurchase.value);
  }
}
