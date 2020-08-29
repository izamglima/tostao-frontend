import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchase-new',
  templateUrl: './purchase-new.component.html'
})
export class PurchaseNewComponent implements OnInit {

  constructor() { }

  noteToggle = false;
  marked = false;
  toggleVisibility(e): void {
    this.marked = e.target.checked;
  }

  //form object
  newPurchase = new FormGroup({
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
  })


  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.newPurchase.value);
  }

}
