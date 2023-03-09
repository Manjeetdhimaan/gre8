import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;
  @ViewChild('menu') menu: ElementRef;
  @ViewChild('toggleButton') toggleButton: ElementRef;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {
     if (window.pageYOffset > 150) {
       let element = document.getElementById('main__header');
       element?.classList.add('sticky');
     } else {
      let element = document.getElementById('main__header');
        element?.classList.remove('sticky');
     }
  }

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.toggleButton.nativeElement && !this.toggleButton.nativeElement.contains(e.target) && e.target !== this.menu.nativeElement && !this.menu.nativeElement.contains(e.target)) {
        this.isMenuOpen = false;
      }
    });
  }

  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
