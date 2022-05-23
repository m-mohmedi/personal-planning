import { Component, HostBinding, OnInit } from '@angular/core';
import { IconName } from 'src/app/icon/icon/iconPack';
import { AuthService } from 'src/app/services/auth.service';
import { ItemSidebar } from 'src/app/types/item-sidebar';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent implements OnInit {
  currentItemActive = 2;
  logo: IconName = 'logo';
  // miniSidebar: boolean = false;
  sidebarItems: ItemSidebar[] = [
    {
      id: 0,
      title: 'Dashboard',
      icon: 'home',
      url: 'home',
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

  @HostBinding('class.mini') miniSidebar: boolean = false;

  constructor(private AuthService: AuthService) {}

  ngOnInit() {}

  minifySidebar() {
    !this.miniSidebar ? (this.logo = 'logoMini') : (this.logo = 'logo');
    this.miniSidebar = !this.miniSidebar;
  }
  logOut() {
    this.AuthService.SignOut();
  }
}
