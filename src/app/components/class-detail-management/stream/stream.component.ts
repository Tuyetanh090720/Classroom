import { Component, OnInit, ElementRef } from '@angular/core';
import {DataService} from '../../data.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ClassCommentComponent } from '../class-comment/class-comment.component';


@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit {

  constructor(private data: DataService, private el: ElementRef, public dialog: MatDialog){}

  classDetail: boolean = true

  dropdownList: string[];
  dropdownSettings:IDropdownSettings={};
  ngOnInit() {
    this.data.classDetailSource.next(this.classDetail)

    this.dropdownList = ['Lớp 1', 'Lớp 2', 'Lớp 3'];
  }

  openClassComment(): void {
    const dialogRef = this.dialog.open(ClassCommentComponent);
    dialogRef.afterClosed().subscribe(result => {});
  }
}
