import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  styles: ['h2 {color: red}'],
})
export class ChildComponent implements OnInit {
  @Input() childMessage: string;
  @Output() messageEvent = new EventEmitter<string>();

  Message = 'message from child!';

  constructor() {}

  ngOnInit(): void {
    
  }

  sendMessage() {
    this.messageEvent.emit('Hello from child');
  }
}
