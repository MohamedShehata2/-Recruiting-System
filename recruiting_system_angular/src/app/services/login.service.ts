import { Observable } from 'rxjs';
import { ILogin } from '../models/ILogin';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  messageError: string = '';
  private url: string = 'http://localhost/api';
  public headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-API-KEY': 'eBKmXPlchepF3QAhBJ4pldSEwp78RhJzSDed5q35S30',
  });
  token: string | null = '';
  user: string | null = '';
  constructor(private httpClient: HttpClient, private router: Router) {}
  login(request: any) {
    return this.httpClient.post<ILogin>(`${this.url}/login`, request, {
      headers: this.headers,
    });
  }
  public get invalidMessage(): string {
    return this.messageError;
  }
  public logout() {
    this.token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-KEY': 'eBKmXPlchepF3QAhBJ4pldSEwp78RhJzSDed5q35S30',
      Authorization: `Bearer ${this.token}`,
    });
    return this.httpClient.delete(`${this.url}/logout/${this.token}`, {
      headers: headers,
    });
  }
  public get isAdmin(): boolean {
    this.token = localStorage.getItem('token');
    this.user = localStorage.getItem('user');
    return this.user == 'admin' && this.token ? true : false;
  }
  public get isUser(): boolean {
    this.token = localStorage.getItem('token');
    this.user = localStorage.getItem('user');
    return this.user == 'user' && this.token ? true : false;
  }
}
