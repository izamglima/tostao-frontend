import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'tostao-client';
  constructor(private meta: Meta) {
    this.meta.addTags([
      { name: 'author', content: 'Izabela Lima' },
      { name: 'subtitle', content: 'Manage your purchases'},
      { name: 'classification', content: 'Finaces'}
    ], true);
  }
  ngOnInit(): void {

  }
}
