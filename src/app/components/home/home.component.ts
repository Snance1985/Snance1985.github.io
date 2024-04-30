import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  heading: string = "Hello World!";
  name: string = "Welcome to my website!";
  angular: string = "I love working with Angular. In fact this very page is made using Angular.";
  csharp: string = "C-Sharp is probably by far one of my favorite languages. I love to use MySQLite and entity core for data persistence!";
  javascript: string = "Meow! It's the power behind every working web page.";
  html: string = "It might just be a markup language, and yet it's in every web page alive today.";
  css: string = "Cascading Style Sheets is the name, making things look pretty is the game.";
  bootstrap: string = "I mean, Bootstrap, it puts everything in to an amazing little package!";

 constructor() { }

 ngOnInit(): void {
 }
}
