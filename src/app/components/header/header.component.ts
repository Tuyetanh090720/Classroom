import { Component, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  classCreation: boolean
  popupCreationQuestion: boolean
  popupCreation: boolean

  ngOnInit(): void {
  }

  menu:boolean = false
  classDetail:boolean = false

  showMainMenu() {
    this.menu = true
  }

  clickedOutsideMenu(e: Event) {
    this.menu = false
  }

  clickedOutsideTapCreation(e: Event){
    const show = this.el.nativeElement.querySelector(".collapse.show")

    if(show){
      show.classList.remove('show');
    }
  }

  showTapCreate() {
    const show = this.el.nativeElement.querySelector(".collapse.show")
    show.classList.remove('show');
  }

}
