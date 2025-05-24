import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CustomAppclassDirective } from './custom-appclass.directive';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers: [CustomAppclassDirective]
})
export class CardsComponent implements OnInit {
  levelType=null
  constructor(private router: Router, private el: CustomAppclassDirective) { }

  ngOnInit(): void {
  }

  //receiving the card
  @Input() data!: {
    title: string,
    description: string,
    type: string,
    id: number
  }; 
  

  @Output() buttonClicked = new EventEmitter<void>();
  handleClick(){
    this.buttonClicked.emit();
  }


}
