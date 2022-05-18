import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/types/user';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.sass'],
})
export class AvatarComponent implements OnInit {
  @Input() direction: 'rtl' | 'ltr' = 'rtl';
  @Input() user: User | null = null;
  constructor() {}

  ngOnInit(): void {}
}
