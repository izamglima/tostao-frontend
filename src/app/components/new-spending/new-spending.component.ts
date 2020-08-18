import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-spending',
  templateUrl: './new-spending.component.html'
})
export class NewSpendingComponent implements OnInit {

  constructor() { }

  noteToggle:boolean = false;
  categoryToggle:boolean = false;

  ngOnInit(): void {
  }

}
