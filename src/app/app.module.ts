import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PagesComponent } from './static/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LearnComponent } from './pages/learn/learn.component';
import { PersonalPlaningComponent } from './pages/personal-planing/personal-planing.component';
import { HabitsComponent } from './pages/habits/habits.component';
import { ProjectComponent } from './pages/project/project.component';
import { FinanceComponent } from './pages/finance/finance.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './authentication/verify-email/verify-email.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    DashboardComponent,
    LearnComponent,
    PersonalPlaningComponent,
    HabitsComponent,
    ProjectComponent,
    FinanceComponent,
    ReportsComponent,
    SignUpComponent,
    SignInComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.fireBaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
