import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.css'],
})
export class AllJobsComponent implements OnInit {
  isLoading: boolean = false;
  deleteMessage: null | string = null;
  updateMessage: null | string = null;
  currentPage: any = 1;
  itemsPerPage: number = 0;
  maxSize: number = 0;
  jobsData: any[] = [];
  jobToEdit: any = {};

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.fetchJobs();
  }
  // get job to to show it in the Edit Form
  getJob(id: number) {
    this.jobService.getJob(id).subscribe({
      next: (job) => {
        console.log(job);
        this.jobToEdit = job;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  fetchJobs(): void {
    this.jobService.getAllJobs(this.currentPage).subscribe({
      next: (res: any) => {
        if (res) {
          this.isLoading = false;
          console.log(res);
          this.jobsData = res.data;
          this.maxSize = res.total;
          this.itemsPerPage = res.per_page;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  deleteJob(id: number) {
    const confirmDelete: boolean = window.confirm(
      'Your are gonna to delete the job?'
    );
    if (confirmDelete) {
      this.jobService.deleteJob(id).subscribe({
        next: (res) => {
          console.log(res);
          this.deleteMessage = 'The job is Deleted';
          this.fetchJobs();
          setTimeout(() => {
            this.deleteMessage = null;
          }, 2000);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
  editJob(id: number) {
    this.isLoading = true;
    this.jobService.editJob(id, this.jobToEdit).subscribe({
      next: (res) => {
        console.log(res);
        this.isLoading = true;
        this.jobToEdit = {};
        this.updateMessage = 'The job is updated';
        this.fetchJobs();
        setTimeout(() => {
          this.updateMessage = null;
        }, 2000);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  pageChangeEvent(event: number) {
    this.currentPage = event;
    this.fetchJobs();
  }
}
