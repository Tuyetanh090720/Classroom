import { Component, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';
import {DataService} from '../../data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ClassEditionComponent } from '../class-edition/class-edition.component';

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.css']
})
export class ListClassComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef,  public dialog: MatDialog) { }


  ngOnInit(): void {
  }

  clickedOutsideTapEdition(e: Event) {
    const show = this.el.nativeElement.querySelector(".collapse.show")

    if(show){
      show.classList.remove('show');
    }
  }
  openClassEdition(): void {
    const dialogRef = this.dialog.open(ClassEditionComponent);
    dialogRef.afterClosed().subscribe(result => {});
  }

}
