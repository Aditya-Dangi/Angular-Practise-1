import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchText: string = '';
  
  @Output()
  searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChange(){
    this.searchTextChange.emit(this.searchText);
    /* console.log(this.searchText); */
  }
}
