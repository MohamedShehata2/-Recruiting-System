import { ShowAllCandidatesComponent } from './../components/show-all-candidates/show-all-candidates.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShowAllCandidatesService {
  httpClient: any;
  token: String = localStorage.getItem('token');
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'X-API-KEY': 'eBKmXPlchepF3QAhBJ4pldSEwp78RhJzSDed5q35S30',
    Authorization: `Bearer ${this.token}`,
  });
  baseUrl: string = 'http://localhost/api/candidate';
  // baseUrl: string =
  //   'http://localhost/api/candidate';
  ShowAllCandidates() {
    const result = this.http.get(this.baseUrl, { headers: this.headers });
    //console.log(result);
    return result; //return observable data
  }
}
