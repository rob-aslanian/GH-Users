import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
