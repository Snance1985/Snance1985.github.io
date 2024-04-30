import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobs = [
    {
      id: 1,
      title: " The Silver Screen Application",
      description: "For this application I acted as the Scrum Master for a team of 5 Software developers (including myself) to create an application for tracking, cataloging, and reviewing movies and films. It's created using Angular for the front end and C-Sharp for the back end. The front end has bootstrap for the layout, an external api call and validation for security. The back end consists of MySQLite for data persistence, JWT for authentication of users and user profile creation, and Entity Core for the database.",
      image: "assets/SilverscreenApp.png"
    },
    {
      id: 2,
      title: "Dino's Pet Store",
      description: "This application comepletely shows off my skills with C-Sharp. It's got data persistence using MySQLite, a database call using Entity Core, and a Dot Net foundation. It is also been made pretty using CSS.",
      image: "assets/dinosdinoshop.png"
    },
    {
      id: 3,
      title: "Sonic's Web page",
      description: "With this page I wanted to do something unique yet simple. It's Typescript within Angular. It has Bootstrap for flow and CSS for style. And of course, it's just totally fun.",
      image: "assets/SonicPersonalPage.png"
    },
  ];

  getJobs(): Observable<any[]> {
    return of(this.jobs);
  }

  getJob(jobId: number): Observable<any> {
    return of(this.jobs.find((job) => job.id === jobId));
  }
}
