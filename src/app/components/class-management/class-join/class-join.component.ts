import { Component, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';
import {DataService} from '../../data.service';


@Component({
  selector: 'app-class-join',
  templateUrl: './class-join.component.html',
  styleUrls: ['./class-join.component.css']
})
export class ClassJoinComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef, private data: DataService) { }

  ngOnInit(): void {
  }

  tapJoin: boolean

  closeTapJoin() {
    this.tapJoin = false
    this.data.tapJoinSource.next(this.tapJoin);
  }

}
