import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { FinanceComponent } from '../pages/finance/finance.component';
import { ForgotPasswordComponent } from '../authentication/forgot-password/forgot-password.component';
import { HabitsComponent } from '../pages/habits/habits.component';
import { LearnComponent } from '../pages/learn/learn.component';
import { PersonalPlaningComponent } from '../pages/personal-planing/personal-planing.component';
import { ProjectComponent } from '../pages/project/project.component';
import { ReportsComponent } from '../pages/reports/reports.component';
import { SignInComponent } from '../authentication/sign-in/sign-in.component';
import { SignUpComponent } from '../authentication/sign-up/sign-up.component';
import { VerifyEmailComponent } from '../authentication/verify-email/verify-email.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'learn', component: LearnComponent },
  { path: 'personal-planning', component: PersonalPlaningComponent },
  { path: 'habits', component: HabitsComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
