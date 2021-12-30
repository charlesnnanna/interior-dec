import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity : "1",
        zIndex : "1"
      })),
      state('closed', style({
        opacity : "0",
        zIndex : "-1"
      })),
      transition('open => closed', [
        animate('0.2s ease-out')
      ]),
      transition('closed => open', [
        animate('0.2s ease-in')
      ]),
    ]),
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'interior-dec';
  showNav: boolean = false;
  toggleNav(): void{
    this.showNav = !this.showNav;
    console.log(this.showNav);
  }
}
