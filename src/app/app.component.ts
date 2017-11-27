import { Component, HostListener } from '@angular/core';

declare let Zone: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  click1() {
    document.onscroll = function() {
      console.log('on property in Zone', Zone.current.name);
    };
  }

  click2() {
    document.addEventListener('scroll', function() {
      console.log('addEventListener in Zone', Zone.current.name);
    });
  }

  @HostListener('document:scroll')
  click3() {
    console.log('HostListener in Zone', Zone.current.name);
  }
}
