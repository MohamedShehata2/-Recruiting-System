import { Router } from '@angular/router';
import { AppModule } from './../../app.module';
import { ShowAllCandidatesService } from './../../services/show-all-candidates.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-all-candidates',
  templateUrl: './show-all-candidates.component.html',
  styleUrls: ['./show-all-candidates.component.css'],
})
export class ShowAllCandidatesComponent implements OnInit {
  jobs: any = [];
  searchText = '';
  p: number = 1;

  constructor(
    private ShowAllCandidatesService: ShowAllCandidatesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.ShowAllCandidatesService.ShowAllCandidates().subscribe({
      next: (response) => {
        this.jobs = Response;
      },
      error: (error) => {
        this.router.navigate(['login']);
      },
    });
  }
}
