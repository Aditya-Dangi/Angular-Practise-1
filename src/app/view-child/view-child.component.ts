import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewChildsChildComponent } from '../view-childs-child/view-childs-child.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('dob') dob!: ElementRef;
  @ViewChild('age') age!: ElementRef;
  @ViewChild(ViewChildsChildComponent, { static: true }) comp!: ViewChildsChildComponent;

  messageFromChild = '';

  calculateAge() {
    let borndate = new Date(this.dob.nativeElement.value).getFullYear();
    let currentdate = new Date().getFullYear();
    this.age.nativeElement.value = currentdate - borndate;
  }

  showChildMessage() {
    this.messageFromChild = this.comp.sayHello();
  }
}
