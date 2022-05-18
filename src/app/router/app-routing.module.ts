import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { FinanceComponent } from '../pages/finance/finance.component';
import { HabitsComponent } from '../pages/habits/habits.component';
import { LearnComponent } from '../pages/learn/learn.component';
import { PersonalPlaningComponent } from '../pages/personal-planing/personal-planing.component';
import { ProjectComponent } from '../pages/project/project.component';
import { ReportsComponent } from '../pages/reports/reports.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'learn',
    component: LearnComponent,
  },
  {
    path: 'personal-planning',
    component: PersonalPlaningComponent,
  },
  {
    path: 'habits',
    component: HabitsComponent,
  },
  {
    path: 'project',
    component: ProjectComponent,
  },
  {
    path: 'finance',
    component: FinanceComponent,
  },
  {
    path: 'reports',
    component: ReportsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
