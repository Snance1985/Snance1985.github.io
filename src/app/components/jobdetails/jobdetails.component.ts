import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/job-service.service';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent implements OnInit {
  job: any; 

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService
  ) {}

  ngOnInit() {
    const jobId = parseInt(this.route.snapshot.paramMap.get('jobId')!);
  
    this.jobService.getJob(jobId).subscribe((job) => {
      this.job = job;
    });
  }
}
