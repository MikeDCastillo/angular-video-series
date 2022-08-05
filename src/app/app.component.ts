import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // To add any lifecycle hook, just add NG to the interface
  title = 'angular-video-series';
}
