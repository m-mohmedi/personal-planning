import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass'],
})
export class ToolbarComponent implements OnInit {
  @Output() mobileSidebar: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  openMobileSidebar() {
    this.mobileSidebar.emit(true);
  }
}
