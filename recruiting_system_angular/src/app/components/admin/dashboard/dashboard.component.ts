import { AdminService } from './../../../services/admin.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public countCandidates: string = '...';
  public countJobs: string = '...';
  public countQuestions: string = '...';
  constructor(
    private dashboardInfoService: AdminService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.dashboardInfoService.countCandidates.subscribe({
      next: (response) => {
        this.countCandidates = response.count;
      },
      error: (error) => {
        this.router.navigate(['login']);
      },
    });
    this.dashboardInfoService.countJobs.subscribe({
      next: (response) => {
        this.countJobs = response.count;
      },
      error: (error) => {
        this.router.navigate(['login']);
      },
    });
    this.dashboardInfoService.countQuestions.subscribe({
      next: (response) => {
        this.countQuestions = response.count;
      },
      error: (error) => {
        this.router.navigate(['login']);
      },
    });
  }
}
