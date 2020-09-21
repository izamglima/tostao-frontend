import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor() { }
  logoutBoxToggle = true;
  slideRight = false;
  slideLeft = false;

  openMenu(): void {
    this.slideRight = true;
    this.slideLeft = false;
  }

  closeMenu(): void {
    this.slideLeft = true;
    setTimeout(() =>
    {
      this.slideRight = false;
    },
    400);
  }

}
