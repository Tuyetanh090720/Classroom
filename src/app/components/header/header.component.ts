import { Component, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';
import {DataService} from '../data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ClassEditionComponent } from '../class-management/class-edition/class-edition.component';
import { ClassCreationComponent } from '../class-management/class-creation/class-creation.component';
import { ClassJoinComponent } from '../class-management/class-join/class-join.component';
import { BooleanInput } from '@angular/cdk/coercion';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef, private data: DataService,public dialog: MatDialog) { }

  classCreation: boolean
  popupCreationQuestion: boolean
  popupCreation: boolean
  classDetail:BooleanInput

  ngOnInit(): void {
    this.data.currentClassDetail.subscribe(classDetail => this.classDetail = classDetail);
  }

  menu:boolean = false

  showMainMenu() {
    this.menu = true
  }

  clickedOutsideMenu(e: Event) {
    this.menu = false
  }

  clickedOutsideTapCreation(e: Event){
    const show = this.el.nativeElement.querySelector(".collapse1tc.collapse.show")

    if(show){
      show.classList.remove('show');
      console.log("OutsideTapCreation")
    }
  }

  openClassCreation(): void {
    const dialogRef = this.dialog.open(ClassCreationComponent);
    dialogRef.afterClosed().subscribe(result => {});
  }

  openClassJoin(): void {
    const dialogRef = this.dialog.open(ClassJoinComponent);
  }

}
