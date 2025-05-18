import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-childs-child',
  templateUrl: './view-childs-child.component.html',
  styleUrls: ['./view-childs-child.component.css']
})
export class ViewChildsChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  sayHello(): string {
    return 'Hello from Child!';
  }
}
