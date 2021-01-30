import { Component, Input, OnInit } from '@angular/core';
import { ViewTypes } from 'src/app/core/models/common/common.constants';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'gh-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.scss'],
})
export class UserBoxComponent implements OnInit {
  @Input() user: User;
  @Input() view: ViewTypes = ViewTypes.LIST;

  constructor() {}

  ngOnInit(): void {}
}
