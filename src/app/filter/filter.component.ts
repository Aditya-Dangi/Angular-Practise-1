import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() calcAll!:number;
  @Input() calcBasic!:number;
  @Input() calcInter!:number;
  @Input() calcAdv!:number;

  selectedButton: string = 'all';
  
  @Output()
  newButtonSelection : EventEmitter<string> = new EventEmitter<string>();

  onNewButtonSelection(){
    this.newButtonSelection.emit(this.selectedButton);
    /* console.log(this.selectedButton); */
  }
}
