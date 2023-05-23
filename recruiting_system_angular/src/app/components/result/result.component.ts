import { Router } from '@angular/router';
import { ProfileService } from '../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  constructor(private userservice: ProfileService, private router: Router) {}
  p: number = 1;
  candidates: any = [];
  candidatesInfo: any = [];
  jobInfo: any = [];
  questionInfo: any = [];
  ngOnInit(): void {
    this.userservice.getresult().subscribe({
      next: (response) => {
        this.candidates = response;
        this.candidatesInfo = this.candidates['candidate'];
        this.jobInfo = this.candidates['job'];
        this.questionInfo = this.candidates['count'];
      },
      error: (error) => {
        this.router.navigate(['login']);
      },
    });
  }
}
