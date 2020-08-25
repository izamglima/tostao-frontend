import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-new',
  templateUrl: './purchase-new.component.html'
})
export class PurchaseNewComponent implements OnInit {

  constructor() { }

  noteToggle = false;
  categoryToggle = false;
  marked = false;
  toggleVisibility(e): void {
    this.marked = e.target.checked;
  }
  ngOnInit(): void {
  }

}
