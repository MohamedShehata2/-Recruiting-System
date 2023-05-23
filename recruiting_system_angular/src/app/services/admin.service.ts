import { IPaginatedConfigQuestion } from './../models/paginated-config-question';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private httpClient: HttpClient) {}
  private token: string | null = localStorage.getItem('token');
  private url: string = 'http://localhost/api';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-API-KEY': 'eBKmXPlchepF3QAhBJ4pldSEwp78RhJzSDed5q35S30',
    Authorization: `Bearer ${this.token}`,
  });

  public get countCandidates(): Observable<{ count: string }> {
    return this.httpClient.get<{ count: string }>(
      `${this.url}/candidate.count`,
      { headers: this.headers }
    );
  }
  public get countJobs(): Observable<{ count: string }> {
    return this.httpClient.get<{ count: string }>(`${this.url}/job.count`, {
      headers: this.headers,
    });
  }
  public get countQuestions(): Observable<{ count: string }> {
    return this.httpClient.get<{ count: string }>(`${this.url}/question`, {
      headers: this.headers,
    });
  }
  public getTitleJob(id: number) {
    return this.httpClient.get<{ title: string }>(`${this.url}/job/${id}`, {
      headers: this.headers,
    });
  }

  public showQuestions(id: number, page: number = 1, pre_page: number = 2) {
    const params = { page, pre_page };
    return this.httpClient.get<IPaginatedConfigQuestion>(
      `${this.url}/questions.job/${id}`,
      {
        headers: this.headers,
        params,
      }
    );
  }
  public deleteQuestion(id: number) {
    return this.httpClient.delete(`${this.url}/question/${id}`, {
      headers: this.headers,
    });
  }
  public searchQuestion(title: string, id: number) {
    return this.httpClient.post(
      `${this.url}/question.search`,
      { title, id },
      { headers: this.headers }
    );
  }
  public createNewJob(request: any) {
    return this.httpClient.post(`${this.url}/job`, request, {
      headers: this.headers,
    });
  }
}
