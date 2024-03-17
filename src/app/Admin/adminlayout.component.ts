import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styleUrls: ['./adminlayout.component.scss']
})
export class AdminlayoutComponent implements AfterViewInit {
  @ViewChild('toggle') toggle!: ElementRef;
  @ViewChild('nav') nav!: ElementRef;
  @ViewChild('bodypd') bodypd!: ElementRef;
  @ViewChild('headerpd') headerpd!: ElementRef;

  constructor(private router:Router) { }

  ngAfterViewInit(): void {
    this.nav.nativeElement.classList.toggle('show');
    this.toggle.nativeElement.classList.toggle('bx-x');
    this.bodypd.nativeElement.classList.toggle('body-pd');
    this.headerpd.nativeElement.classList.toggle('body-pd');
    this.showNavbar();
  }

  showNavbar(): void {
    if (this.toggle && this.nav && this.bodypd && this.headerpd) {
      this.toggle.nativeElement.addEventListener('click', () => {
        // show navbar
        this.nav.nativeElement.classList.toggle('show');
        // change icon
        this.toggle.nativeElement.classList.toggle('bx-x');
        // add padding to body
        this.bodypd.nativeElement.classList.toggle('body-pd');
        // add padding to header
        this.headerpd.nativeElement.classList.toggle('body-pd');
      });
    }
  }

  colorLink(link: HTMLElement): void {
    const linkColor = document.querySelectorAll('.nav_link');
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  }

  Logout(){
    localStorage.removeItem("login")
    this.router.navigate(['/'])
  }
}
