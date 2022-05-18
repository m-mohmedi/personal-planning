import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  statusMobileSidebar: boolean = false;
  title = 'personal-planning';

  mobileSidebar(event: boolean) {
    this.statusMobileSidebar = event;
  }
}
