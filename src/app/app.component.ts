import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy { // To add any lifecycle hook, just add NG to the interface
 
  intervalSub : any;

  ngOnInit() { // Console logs every interval
    this.intervalSub = setInterval(() => {
      console.log('Hello from ngOnInit')
    }, 1000);
  }
 
  ngOnDestroy() {
    if (this.intervalSub) {
      clearInterval(this.intervalSub);
    }
  }
  
}
