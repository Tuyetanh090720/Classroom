import { Component, OnInit, Input, ElementRef, HostListener  } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-class-creation',
  templateUrl: './class-creation.component.html',
  styleUrls: ['./class-creation.component.css']
})
export class ClassCreationComponent implements OnInit {

  constructor(private el: ElementRef) {  }
  classCreation: boolean
  popupCreationQuestion: boolean = true
  popupCreation: boolean = false

  ngOnInit(): void {
  }
  showPopupCreation: boolean

  showCreation(){
    this.popupCreation = true;

    const popup= this.el.nativeElement.querySelector(".popup-creation-question")
    popup.style.display = "none"
  }

}
