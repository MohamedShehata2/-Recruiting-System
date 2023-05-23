import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  token_user: string = localStorage.getItem('token');
  headers: HttpHeaders = new HttpHeaders({
    'X-API-KEY': 'eBKmXPlchepF3QAhBJ4pldSEwp78RhJzSDed5q35S30',
    Authorization: `Bearer ${this.token_user}`,
  });
  url: string = 'http://localhost/api';
  constructor(private http: HttpClient) {}
  getresult() {
    return this.http.get(`${this.url}/candidate.show`, { headers: this.headers });
  }
  getprofile() {
    return this.http.get(`${this.url}/user.show`, { headers: this.headers });
  }
}
