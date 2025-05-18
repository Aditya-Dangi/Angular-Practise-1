import { Component, OnInit } from '@angular/core';
import { Customer } from './Customer';

@Component({
  selector: 'app-reference-temp-child',
  templateUrl: './reference-temp-child.component.html',
  styleUrls: ['./reference-temp-child.component.css']
})
export class ReferenceTempChildComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  text: string = '';
  text2: string = '';

  array: Customer[] = [
    {serialNo:1, name1: 'Aditya', place: 'Delhi', name2: 'A'},
    {serialNo:2, name1: 'Mohit', place: 'Mumbai', name2: 'B'},
    {serialNo:3, name1: 'Rohan', place: 'Lucknow', name2: 'C'}
  ];

  funcOnClick(name: string, name2: string){
    this.text = name;
    this.text2 = name2;
  } 

  
}
