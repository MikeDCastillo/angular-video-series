import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() childMessage!: string;
  // @Output decorator is for when trying to send data from the child to the parent 
    // for when buttons are clicked, form entries, other user events. needs EventEmitter
  constructor() { }

  ngOnInit(): void {
  }

}
