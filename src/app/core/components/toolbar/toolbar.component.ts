import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass'],
})
export class ToolbarComponent implements OnInit {
  @Output() mobileSidebar: EventEmitter<boolean> = new EventEmitter();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  openMobileSidebar() {
    this.mobileSidebar.emit(true);
  }

  get user() {
    return this.authService.user;
  }
}
