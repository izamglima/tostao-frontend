import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-new',
  templateUrl: './purchase-new.component.html'
})
export class PurchaseNewComponent implements OnInit {

  constructor() { }

  noteToggle:boolean = false;
  categoryToggle:boolean = false;
  marked:boolean = false;

  toggleVisibility(e){
    this.marked= e.target.checked;
  }

  ngOnInit(): void {
  }

}
