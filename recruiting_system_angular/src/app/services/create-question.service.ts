import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CreateQuestionService {
  constructor(private http: HttpClient) {}
  token: String = localStorage.getItem('token');
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-API-KEY': 'eBKmXPlchepF3QAhBJ4pldSEwp78RhJzSDed5q35S30',
    Authorization: `Bearer ${this.token}`,
  });

  // baseUrl: string =
  //   'http://localhost/Project_Back_End/recruiting_system-/public/api/question';
  baseUrl: string = 'http://localhost/api/question';

  CreateQuestion(question: any) {
    return this.http.post(this.baseUrl, question, { headers: this.headers });
  }
  editQuestion(id: number, request: object) {
    return this.http.put(`${this.baseUrl}/${id}`, request, {
      headers: this.headers,
    });
  }
  getQuestionById(id: number) {
    return this.http.get(`${this.baseUrl}/${id}/edit`, { headers: this.headers });
  }
}
