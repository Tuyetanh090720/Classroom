import { Component, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';
import {DataService} from '../data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ClassEditionComponent } from '../class-management/class-edition/class-edition.component';
import { ClassCreationComponent } from '../class-management/class-creation/class-creation.component';

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
  classDetail:boolean
  tapJoin: boolean


  openDialog(): void {
    const dialogRef = this.dialog.open(ClassCreationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
    this.data.currentClassDetail.subscribe(classDetail => this.classDetail = classDetail);
    this.data.currentTapJoin.subscribe(tapJoin => this.tapJoin = tapJoin);
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

  clickedOutsideBtnCreation(e: Event){
    const show = this.el.nativeElement.querySelector(".collapse1tc.collapse.show")

    if(show){
      show.classList.remove('show');
      console.log("OutsideTapCreation")
    }
  }

  @HostListener('document:click', ['$event'])
  click(event:any) {
    if(this.tapJoin == false) {
      const show = this.el.nativeElement.querySelector(".collapse.show")

      if(show){
        show.classList.remove('show');
      }
    }
  }

}
