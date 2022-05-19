import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  statusMobileSidebar: boolean = false;
  title = 'personal-planning';

  constructor() {}
  ngOnInit(): void {}

  mobileSidebar(event: boolean) {
    this.statusMobileSidebar = event;
  }
}
