import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { IconComponent } from './components/icon/icon.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { SidebarMobileComponent } from './responsive/sidebar-mobile/sidebar-mobile.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AvatarComponent,
    CardComponent,
    IconComponent,
    SidebarComponent,
    ToolbarComponent,
    SidebarMobileComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    AvatarComponent,
    CardComponent,
    IconComponent,
    SidebarComponent,
    ToolbarComponent,
    SidebarMobileComponent,
  ],
})
export class CoreModule {}
