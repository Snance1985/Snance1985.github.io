import { Component } from '@angular/core';
import { JobService } from 'src/app/job-service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  jobs: any[] = []; 

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.jobService.getJobs().subscribe((jobs) => {
      this.jobs = jobs;
    });
  }
}
