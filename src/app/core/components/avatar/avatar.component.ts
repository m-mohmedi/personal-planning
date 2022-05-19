import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/types/user';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.sass'],
})
export class AvatarComponent implements OnInit {
  @Input() user: User | null = null;
  constructor() {}

  ngOnInit(): void {
    console.log(this.user + 'this');
  }
}
