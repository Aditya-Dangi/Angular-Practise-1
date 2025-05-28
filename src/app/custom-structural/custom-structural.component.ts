import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-structural',
  templateUrl: './custom-structural.component.html',
  styleUrls: ['./custom-structural.component.css']
})
export class CustomStructuralComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  display: boolean = false;

  toggle(){
    this.display = !this.display;
  }
}
