import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchase-new',
  templateUrl: './purchase-new.component.html'
})
export class PurchaseNewComponent implements OnInit {
  public newPurchase: FormGroup;
  public purchaseItem: FormArray;
  constructor(private fb: FormBuilder) { }

  noteToggle = false;
  marked = false;
  toggleVisibility(e): void {
    this.marked = e.target.checked;
  }

  addNewItem(): FormGroup {
    return this.fb.group({
      product: [null, Validators.compose([Validators.required])],
      quantity: [null, Validators.compose([Validators.required])],
      price: [null, Validators.compose([Validators.required])],
      category: [null, Validators.compose([Validators.required])]
    });
  }

  // add a purchaseItem form group
  showNewItem() {
    this.purchaseItem.push(this.addNewItem());
  }

  // remove purchaseItem from group
  removeNewItem(index) {
    this.purchaseItem.removeAt(index);
  }

  get purchaseItemFormGroup() {
    return this.newPurchase.get('items') as FormArray;
  }

  cleanPurchaseNote() {
    this.newPurchase.patchValue({'note':null});
  }

  ngOnInit(): void {
    this.newPurchase = this.fb.group({
      marketplace: [null, Validators.compose([Validators.required])],
      currency: [null, Validators.compose([Validators.required])],
      date: [null, Validators.compose([Validators.required])],
      note: [null],
      items: this.fb.array([this.addNewItem()])
    });
    // set purchaseItem to the form control containing items
    this.purchaseItem = this.newPurchase.get('items') as FormArray;
  }

  onSubmit() {
    console.log(this.newPurchase.value);
  }

  //form object
  /*newPurchase = new FormGroup({
    marketplace: new FormControl('', Validators.required),
    currency: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    note: new FormControl(''),
    purchaseItem: new FormGroup({
      product: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      category: new FormControl('')
    })
  })*/



}
