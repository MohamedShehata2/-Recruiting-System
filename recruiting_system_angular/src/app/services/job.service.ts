import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  job_id: number = 0;
  applyUrl: string;
  candidateUrl: string;
  baseurl: string;
  constructor(private http: HttpClient) {}

  baseURL: string = 'http://localhost/api';
  // TODO: get token from localStorage
  auth_token = localStorage.getItem('token');

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.auth_token}`,
    'X-API-KEY': 'eBKmXPlchepF3QAhBJ4pldSEwp78RhJzSDed5q35S30',
  });

  requestOptions = { headers: this.headers };

  getAllJobs(page: number) {
    return this.http.get(
      `${this.baseURL}/job?page=${page}`,
      this.requestOptions
    );
  }

  getJob(id: number) {
    return this.http.get(`${this.baseURL}/job/${id}`, this.requestOptions);
  }

  createJob(job: any) {
    return this.http.post(`${this.baseURL}/job`, job, this.requestOptions);
  }

  editJob(id: number, job: any) {
    return this.http.put(`${this.baseURL}/job/${id}`, job, this.requestOptions);
  }

  deleteJob(id: number) {
    return this.http.delete(`${this.baseURL}/job/${id}`, this.requestOptions);
  }

  job() {
    this.applyUrl = `${this.baseURL}/question/` + this.job_id;

    return this.http.get(this.applyUrl, { headers: this.headers });
  }

  candidate(
    job_id: any,
    numbers_of_right_answers: number,
    numbers_of_wrong_answers: number
  ) {
    let user = {
      job_id,
      numbers_of_right_answers,
      numbers_of_wrong_answers,
    };
    return this.http.post(this.candidateUrl, user, { headers: this.headers });
  }

  getlogin() {
    return this.http.get(`${this.baseURL}/job.available`, { headers: this.headers });
  }
}
