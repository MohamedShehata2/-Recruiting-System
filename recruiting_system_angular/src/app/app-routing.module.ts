import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { LoginComponent } from './components/shared/login/login.component';
import { ResultComponent } from './components/result/result.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgModule, Component } from '@angular/core';
import { JobComponent } from './components/job/job.component';
import { ApplyjobComponent } from './components/applyjob/applyjob.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { RegisterFormComponent } from './components/user/register-form/register-form.component';
import { AllJobsComponent } from './components/admin/all-jobs/all-jobs.component';
import { ShowAllCandidatesComponent } from './components/show-all-candidates/show-all-candidates.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { AuthenticationUserGuard } from './authentication-user.guard';
import { AuthenticationAdminGuard } from './authentication-admin.guard';

const routes: Routes = [
  // { path: 'welcome', component: ApplyjobComponent },
  {
    path: 'userjob',
    component: JobComponent,
    canActivate: [AuthenticationUserGuard],
  },
  {
    path: 'apply/:id',
    component: ApplyjobComponent,
    canActivate: [AuthenticationUserGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthenticationUserGuard],
  },
  {
    path: 'result',
    component: ResultComponent,
    canActivate: [AuthenticationAdminGuard],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'createQuestion/:question_id/:job_id',
    component: CreateQuestionComponent,
    canActivate: [AuthenticationAdminGuard],
  },
  {
    path: 'showAllCandidates',
    component: ShowAllCandidatesComponent,
    canActivate: [AuthenticationAdminGuard],
  },
  {
    path: 'signup',
    component: RegisterFormComponent,
  },
  {
    path: 'all-jobs',
    component: AllJobsComponent,
  },
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full',
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
