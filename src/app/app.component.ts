import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar">
    <a routerLink="/homepage">Home Page</a>|
    <a routerLink="/aboutme">About Me</a>|
    <a routerLink="/experience">My Experience</a>
  </nav>
  <router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seans_webpage';
}
