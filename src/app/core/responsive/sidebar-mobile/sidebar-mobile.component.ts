import {
  Component,
  EventEmitter,
  HostBinding,
  OnInit,
  Output,
} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ItemSidebar } from 'src/app/types/item-sidebar';

@Component({
  selector: 'sidebar-mobile',
  templateUrl: './sidebar-mobile.component.html',
  styleUrls: ['./sidebar-mobile.component.sass'],
})
export class SidebarMobileComponent implements OnInit {
  currentItemActive = 0;
  sidebarItems: ItemSidebar[] = [
    {
      id: 0,
      title: 'Dashboard',
      icon: 'home',
      url: '',
    },
    {
      id: 1,
      title: 'Learn ',
      icon: 'target',
      url: 'learn',
    },
    {
      id: 2,
      title: 'Personal Planing',
      icon: 'course',
      url: 'personal-planning',
    },
    {
      id: 3,
      title: 'Habits',
      icon: 'calender',
      url: 'habits',
    },
    {
      id: 4,
      title: 'Project',
      icon: 'business',
      url: 'project',
    },
    {
      id: 5,
      title: 'Finance',
      icon: 'coin',
      url: 'finance',
    },
    {
      id: 6,
      title: 'Reports',
      icon: 'report',
      url: 'reports',
    },
  ];

  @Output() mobileSidebar: EventEmitter<boolean> = new EventEmitter();

  @HostBinding('class.show') statusSidebar: boolean = false;

  constructor(private AuthService: AuthService) {}

  ngOnInit() {}

  closeSidebar() {
    this.mobileSidebar.emit(false);
  }

  selectItemSidebar(item: number) {
    this.currentItemActive = item;
    this.closeSidebar();
  }

  logOut() {
    this.AuthService.SignOut();
  }
}
