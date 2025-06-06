import { Component, OnInit } from '@angular/core';
import { ObservableService } from './observables.service';

@Component({
  selector: 'app-obervables',
  templateUrl: './obervables.component.html',
  styleUrls: ['./obervables.component.css']
})
export class ObervablesComponent implements OnInit {

  messages: string[] = [];

  constructor(private observableService: ObservableService) {}

  ngOnInit() {
    this.observableService.getMessages().subscribe({
      next: (msg) => this.messages.push(msg),
      error: (err) => console.error('❌ Error:', err),
      complete: () => console.log('✅ All messages received'),
    });
  }
}
