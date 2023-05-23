import { CreateQuestionService } from './../../services/create-question.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css'],
})
export class CreateQuestionComponent implements OnInit {
  jobId: number = 0;
  question_id: number = 0;
  Question: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private CreateQuestionService: CreateQuestionService,
    private router: Router
  ) {
    this.jobId = Number(this.activatedRoute.snapshot.paramMap.get('job_id'));
    this.question_id = Number(
      this.activatedRoute.snapshot.paramMap.get('question_id')
    );
  }

  ngOnInit(): void {
    if (this.question_id !== 0)
      this.CreateQuestionService.getQuestionById(this.question_id).subscribe({
        next: (Response: any) => {
          this.Question = Response.data;
          console.log(Response)
          console.log(this.Question)
          this.createQuestionForm.controls['Question'].setValue(
            this.Question.title
          );
          this.createQuestionForm.controls['Answer1'].setValue(
            this.Question.Answer1
          );
          this.createQuestionForm.controls['Answer2'].setValue(
            this.Question.Answer2
          );
          this.createQuestionForm.controls['Answer3'].setValue(
            this.Question.Answer3
          );
          this.createQuestionForm.controls['Answer4'].setValue(
            this.Question.RightAnswer
          );
          this.createQuestionForm.controls['Details'].setValue(
            this.Question.description
          );
        },
      });
  }

  createQuestionForm = new FormGroup({
    Question: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    Answer1: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    Answer2: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    Answer3: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    Answer4: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    RightAnswer: new FormControl('', [
      Validators.required,
      Validators.maxLength(1),
    ]),
    Details: new FormControl(''),
  });
  public get getQuestion() {
    return this.createQuestionForm.controls.Question;
  }

  public get getAnswer1() {
    return this.createQuestionForm.controls['Answer1'];
  }

  public get getAnswer2() {
    return this.createQuestionForm.controls['Answer2'];
  }

  public get getAnswer3() {
    return this.createQuestionForm.controls['Answer3'];
  }

  public get getAnswer4() {
    return this.createQuestionForm.controls['Answer4'];
  }
  public get getRightAnswer() {
    return this.createQuestionForm.controls['RightAnswer'];
  }

  submitForm(e: any) {
    e.preventDefault();
    if (this.createQuestionForm.status == 'VALID') {
      if (this.question_id == 0) {
        this.CreateQuestionService.CreateQuestion(this.request).subscribe({
          next: (response: any) => {
            console.log(response);
          },
          error: (error: any) => {
            // this.router.navigate(['login']);
            console.log(error);
          },
        });
      } else {
        this.CreateQuestionService.editQuestion(
          this.question_id,
          this.request
        ).subscribe({
          next: (response: any) => {
            console.log(response);
            // this.router.navigate(['allQuestion']);
          },
          error: (error: any) => {
            console.log(error);
            // this.router.navigate(['login']);
          },
        });
      }
    }
  }

  public get request(): object {
    let { Question, Answer1, Answer2, Answer3, Answer4, RightAnswer, Details } =
      this.createQuestionForm.value;
    console.log(this.createQuestionForm.value);
    let request: object = {};
    if (RightAnswer === 'A') {
      RightAnswer = Answer1;
      request = {
        job_id: this.jobId,
        title: Question,
        Answer1: Answer4,
        Answer2,
        Answer3,
        RightAnswer,
        description: Details,
      };
    }
    if (RightAnswer === 'B') {
      RightAnswer = Answer2;
      request = {
        job_id: this.jobId,
        title: Question,
        Answer1,
        Answer2: Answer4,
        Answer3,
        RightAnswer,
        description: Details,
      };
    }
    if (RightAnswer === 'C') {
      RightAnswer = Answer3;
      request = {
        job_id: this.jobId,
        title: Question,
        Answer1,
        Answer2,
        Answer3: Answer4,
        RightAnswer,
        description: Details,
      };
    }
    if (RightAnswer === 'D') {
      RightAnswer = Answer4;
      request = {
        job_id: this.jobId,
        title: Question,
        Answer1,
        Answer2,
        Answer3,
        RightAnswer,
        description: Details,
      };
    }
    return request;
  }
}
