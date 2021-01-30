import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gh-loader',
  template: `<div class="spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>`,
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
