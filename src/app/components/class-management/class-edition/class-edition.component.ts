import { Component, OnInit,  HostListener, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'app-class-edition',
  templateUrl: './class-edition.component.html',
  styleUrls: ['./class-edition.component.css']
})
export class ClassEditionComponent implements OnInit {

  constructor( private renderer: Renderer2,private el: ElementRef) { }

  ngOnInit(): void {
  }

}
