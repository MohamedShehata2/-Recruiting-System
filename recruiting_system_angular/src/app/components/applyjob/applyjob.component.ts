import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from './../../services/job.service';
import { forEach } from 'lodash';

@Component({
  selector: 'app-applyjob',
  templateUrl: './applyjob.component.html',
  styleUrls: ['./applyjob.component.css'],
})
export class ApplyjobComponent implements OnInit {
  questions: any = [];
  question: any = [];
  job_id: number = 0;
  radioSelected: any = [];
  rightAnswer: number = 0;
  questionId: any;
  answer: any;

  constructor(
    private jobService: JobService,
    private activatedroute: ActivatedRoute,
    private routre: Router
  ) {}

  ngOnInit(): void {
    this.job_id = Number(this.activatedroute.snapshot.paramMap.get('id'));
    this.jobService.job_id = this.job_id;
    this.jobService.job().subscribe({
      next: (response) => {
        this.questions = response;
        this.question = this.questions.data;
        this.shuffleAnswers();
      },
      error: (error) => {
        this.routre.navigate(['login']);
      },
    });
  }

  storeCandidate() {
    for (let i = 0; i < this.radioSelected.length; i++) {
      if (this.radioSelected[i]) {
        this.questionId = this.radioSelected[i].split(':')[0];
        this.answer = this.radioSelected[i].split(':')[1];
      }
      for (let myquestion of this.question) {
        if (myquestion.id == this.questionId) {
          if (myquestion.RightAnswer == this.answer) {
            this.rightAnswer++;
          }
        }
      }
    }
    this.jobService
      .candidate(
        this.job_id,
        this.rightAnswer,
        this.question.length - this.rightAnswer
      )
      .subscribe({
        next: (response) => {
          this.routre.navigate(['/userjob']);
        },
      });
  }

  shuffle(array: any[]): any[] {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  shuffleAnswers(): void {
    forEach(this.question, (item) => {
      item.answers = this.shuffle([
        item.Answer1,
        item.Answer2,
        item.Answer3,
        item.RightAnswer,
      ]);
    });
  }
}
