import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gh-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent implements OnInit {
  @Input() url: string;
  loaded = false;

  constructor() {}

  ngOnInit(): void {}
}
