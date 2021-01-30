import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserRepository } from 'src/app/core/models/repository';

@Component({
  selector: 'gh-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss'],
})
export class UserReposComponent implements OnInit {
  @Input() repos$: Observable<IUserRepository[]>;
  isVisible = false;

  constructor() {}

  ngOnInit(): void {}

  onVisible(e) {
    if (!this.isVisible) {
      this.isVisible = e;
    }
  }
}
