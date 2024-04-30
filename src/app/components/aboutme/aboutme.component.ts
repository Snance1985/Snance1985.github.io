import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  aboutMe: string = "My name is Sean.";
  statement: string = "I'm a software developer, a husband, a father, and someone who never ever gives up! When I'm not coding I love doing anything outside, I like playing video games and reading books. You can catch me spending most of my time with my friends and family. Most people would say that I'm a great guy to be around, I'll let you decide. Let's connect! You can find me at any of the places below!";
  contactme: string = "spnance1985@gmail.com";
  contactme2: string = "Snance1985";
  contactme3: string = "Sean-Nance";


 constructor() { }

 ngOnInit(): void {
 }
}
