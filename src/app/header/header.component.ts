import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuVisible;
  toggleMenu() {
    if (this.menuVisible) {
      this.menuVisible = false;
    } else {
      this.menuVisible = true;
    }
  }
}
