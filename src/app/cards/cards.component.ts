import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private router: Router) { }

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
