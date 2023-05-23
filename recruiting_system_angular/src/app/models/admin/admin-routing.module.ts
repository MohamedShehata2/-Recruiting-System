import { AuthenticationAdminGuard } from './../../authentication-admin.guard';
import { CreateJobComponent } from './../../components/admin/create-job/create-job.component';
import { DashboardComponent } from './../../components/admin/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AllQuestionsComponent } from './../../components/admin/all-questions/all-questions.component';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthenticationAdminGuard],
  },
  {
    path: 'addJob',
    component: CreateJobComponent,
    canActivate: [AuthenticationAdminGuard],
  },
  {
    path: 'allQuestions/:id',
    component: AllQuestionsComponent,
    canActivate: [AuthenticationAdminGuard],
  },
];
@NgModule({
  imports: [
    NgxPaginationModule,
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CreateJobComponent, AllQuestionsComponent],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
