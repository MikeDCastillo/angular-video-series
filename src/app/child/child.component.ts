import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  
  // @Output decorator is for when trying to send data from the child to the parent 
    // for when buttons are clicked, form entries, other user events. needs EventEmitter
  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit('Hello from child'); // the value to emit
  }

}
