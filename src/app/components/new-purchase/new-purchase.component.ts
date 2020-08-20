import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-purchase',
  templateUrl: './new-purchase.component.html'
})
export class NewPurchaseComponent implements OnInit {

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
