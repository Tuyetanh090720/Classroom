import { Component, OnInit, ElementRef,HostListener } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-classwork',
  templateUrl: './classwork.component.html',
  styleUrls: ['./classwork.component.css']
})
export class ClassworkComponent implements OnInit {

  constructor(private data: DataService,  private el: ElementRef) { }

  classDetail: boolean = true
  tapAssignmentCreation: boolean
  tapAssignmentEdition: boolean


  ngOnInit(): void {
    this.data.classDetailSource.next(this.classDetail)
    this.data.currentAssignmentCreation.subscribe(tapAssignmentCreation => this.tapAssignmentCreation = tapAssignmentCreation);
    this.data.currentAssignmentEdition.subscribe(tapAssignmentEdition => this.tapAssignmentEdition = tapAssignmentEdition);

  }

  clickedOutsideAssignmentOptionBlock(e: Event){
    const assignmentOptionBlock = this.el.nativeElement.querySelector(".assignment-option-block.collapse.show")

    if(assignmentOptionBlock){
      assignmentOptionBlock.classList.remove('show');
    }
  }

  clickedOutsideAssignmentCreationBlock(e: Event){
    const assignmentCreationBlock = this.el.nativeElement.querySelector(".assignment-creation-block.collapse.show")

    if(assignmentCreationBlock){
      assignmentCreationBlock.classList.remove('show');
    }
  }

  clickedOutsideAssignmentEditionBlock(e: Event){
    const assignmentTapEdition = this.el.nativeElement.querySelector(".tap-edition.collapse.show")

    if(assignmentTapEdition){
      assignmentTapEdition.classList.remove('show');
    }
  }

  clickedOutsideAssignmentDetail(e: Event){
    const show = this.el.nativeElement.querySelector(".assignment-detail.collapse.show")

    if(show){
      show.classList.remove('show');
    }
  }

  @HostListener('document:click', ['$event'])
  click(event:any) {
    if(this.tapAssignmentCreation == false) {
      const show = this.el.nativeElement.querySelector(".assignment-creation-block.collapse.show")

      if(show){
        show.classList.remove('show');
      }
    }

    if(this.tapAssignmentEdition == false) {
      const show = this.el.nativeElement.querySelector(".assignment-edition-block.collapse.show")

      if(show){
        show.classList.remove('show');
      }
    }
  }
}
