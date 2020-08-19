import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html'
})
export class NewExpenseComponent implements OnInit {

  constructor() { }

  noteToggle:boolean = false;
  categoryToggle:boolean = false;

  ngOnInit(): void {
  }

}
