import { Component, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.css']
})
export class ListClassComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }


  ngOnInit(): void {
  }

  clickedOutsideTapEdition(e: Event) {
    const show = this.el.nativeElement.querySelector(".collapse.show")

    if(show){
      show.classList.remove('show');
    }
  }

}
