import { AdminRoutingModule } from './models/admin/admin-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/shared/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { ShowAllCandidatesComponent } from './components/show-all-candidates/show-all-candidates.component';
// import { WelcomeComponent } from './components/user/welcome/welcome.component';
import { AllJobsComponent } from './components/admin/all-jobs/all-jobs.component';
import { RegisterFormComponent } from './components/user/register-form/register-form.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResultComponent } from './components/result/result.component';
import { MysidebarComponent } from './components/mysidebar/mysidebar.component';
import { JobComponent } from './components/job/job.component';
import { ApplyjobComponent } from './components/applyjob/applyjob.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderByPipe } from './order-by-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // WelcomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    NotFoundComponent,
    AllJobsComponent,
    RegisterFormComponent,
    ProfileComponent,
    ResultComponent,
    MysidebarComponent,
    JobComponent,
    ApplyjobComponent,
    OrderByPipe,
    CreateQuestionComponent,
    ShowAllCandidatesComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
