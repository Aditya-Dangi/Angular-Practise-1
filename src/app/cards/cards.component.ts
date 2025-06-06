import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { handleAlert } from '../Services/handleAlert.services';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  levelType=null
  constructor(private router: Router, private handlingAlert: handleAlert) { }

  ngOnInit(): void {
  }
  //receiving the card
  @Input() data!: {
    title: string,
    description: string,
    type: string,
    id: number
  };

  handleAlertInAction(title: string){
    this.handlingAlert.handleClick(title);
  }

  @Output() buttonClicked = new EventEmitter<void>();
  handleClick(){
    this.buttonClicked.emit();
  }


}
