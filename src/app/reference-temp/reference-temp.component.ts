  import { Component, OnInit, Output } from '@angular/core';
  import { EventEmitter } from 'stream';

  @Component({
    selector: 'app-reference-temp',
    templateUrl: './reference-temp.component.html',
    styleUrls: ['./reference-temp.component.css']
  })
  export class ReferenceTempComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    clickButton(data: HTMLInputElement){
      alert("Hello " + data.value);
    }
    
    
  }
