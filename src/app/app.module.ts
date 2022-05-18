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

@NgModule({
  declarations: [AppComponent, PagesComponent, DashboardComponent, LearnComponent, PersonalPlaningComponent, HabitsComponent, ProjectComponent, FinanceComponent, ReportsComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
