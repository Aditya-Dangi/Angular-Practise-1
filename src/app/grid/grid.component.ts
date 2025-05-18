import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {}

  

  cardsBox : any[] = [];

  ngOnInit(): void {
    this.loadCardsData();
  }

  loadCardsData(){
    this.http.get<any[]>('/assets/cards-data.json')
      .subscribe(data => {
          this.cardsBox = data;
      })
  }
  
  
  
  calculateAll():number{
    return this.cardsBox.length;
  }

  calculateBasic():number{
    return this.cardsBox.filter(card => card.type === 'basic').length;
  }

  calculateIntermediate():number{
    return this.cardsBox.filter(card => card.type === 'intermediate').length;
  }

  calculateAdvanced():number{
    return this.cardsBox.filter(card => card.type === 'advanced').length;
  }

  currentButtonSelected : string = 'all';

  currentButtonSelection(data:string){
    this.currentButtonSelected = data;
  }

  searchedText: string = '';

  searchedTextFunc(data: string){
    this.searchedText = data;
    /* console.log(this.searchedText); */
  }

  openAnotherComponent(card: any){
    if(card.id === 1){
      console.log('[reference]'+ " " + card.id);
      this.router.navigate(['/reference']);
    }else if(card.id === 2){
      this.router.navigate(['/view-child']);
    }else if(card.id === 3){
      this.router.navigate(['/ng-content']);
    }
  }

}
