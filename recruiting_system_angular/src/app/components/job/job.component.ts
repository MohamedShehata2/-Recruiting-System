import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit {
  job: any = [];
  jobs: any = [];
  current: number = 1;
  constructor(private jobservice: JobService, private router: Router) {}
  ngOnInit(): void {
    this.jobservice.getlogin().subscribe({
      next: (response) => {
        console.log(response);
        this.jobs = response;
        // this.job = this.jobs[0];
        // console.log(this.job);
      },
      error: (error) => {
        this.router.navigate(['login']);
      },
    });
  }
}
