import { AdminService } from './../../../services/admin.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css'],
})
export class CreateJobComponent {
  messageError: string = '';
  today = new Date().toDateString();
  constructor(
    private createJobService: AdminService,
    private router: Router
  ) {}
  jobForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(10)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(15),
    ]),
    start_date: new FormControl('', [Validators.required, this.dateValidator]),
    end_data: new FormControl('', [Validators.required, this.dateValidator]),
  });
  dateValidator(control: any) {
    if (new Date(control.value) < new Date()) return { invalidDate: true };
    return null;
  }

  public get title() {
    return this.jobForm.controls.title;
  }
  public get description() {
    return this.jobForm.controls.description;
  }
  public get start_date() {
    return this.jobForm.controls.start_date;
  }
  public get end_data() {
    return this.jobForm.controls.end_data;
  }

  onSubmit(e: Event) {
    e.preventDefault();
    if (this.jobForm.status == 'VALID') {
      this.createJobService.createNewJob(this.jobForm.value).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          this.router.navigate(['login']);
        },
      });
    } else {
      this.messageError = 'Invalid Data. Please try again.';
    }
  }
}
