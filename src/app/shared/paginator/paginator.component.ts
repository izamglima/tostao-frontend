import { Component, OnInit, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent implements OnInit {
  @Input() data;

  pageEvent: PageEvent;
  datasource: null;
  pageIndex: number;
  pageSize: number;
  length: number;

  constructor() { }

  ngOnInit(): void {
    this.datasource = this.data;
    console.log(this.data);

    this.pageIndex = 0;
    this.pageSize = 50;
    length = this.data.length;
  }

}
