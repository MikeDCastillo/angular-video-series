import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // Keep application logic in the component
  title = "Hello World!";

  getMin(a : any, b : any) {
    if(a < b) {
      return a;
    }
    return b;
  }

}
