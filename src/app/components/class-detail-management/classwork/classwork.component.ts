import { Component, OnInit, ElementRef,HostListener } from '@angular/core';
import {DataService} from '../../data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ClassCommentComponent } from '../class-comment/class-comment.component';


@Component({
  selector: 'app-classwork',
  templateUrl: './classwork.component.html',
  styleUrls: ['./classwork.component.css']
})
export class ClassworkComponent implements OnInit {

  constructor(private data: DataService,  private el: ElementRef, public dialog: MatDialog) { }

  classDetail: boolean = true

  activeState = "Classwork"

  role: string


  ngOnInit(): void {
    this.data.classDetailSource.next(this.classDetail)

    this.data.activeStateSource.next(this.activeState)

    this.data.currentRole.subscribe(role => this.role = role);

  }

  openClassComment(): void {
    const dialogRef = this.dialog.open(ClassCommentComponent);
    dialogRef.afterClosed().subscribe(result => {});
  }

  clickedOutsideAssignmentOptionBlock(e: Event){
    const assignmentOptionBlock = this.el.nativeElement.querySelector(".assignment-option-block.collapse.show")

    if(assignmentOptionBlock){
      assignmentOptionBlock.classList.remove('show');
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
}
