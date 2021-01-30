import { Component, OnInit } from '@angular/core';
import { faList, faTh } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { ViewTypes } from 'src/app/core/models/common/common.constants';
import { IUser } from 'src/app/core/models/user';
import { StateService } from 'src/app/core/services/state/state.service';
@Component({
  selector: 'gh-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  icList = faList;
  icGrid = faTh;

  users$: Observable<IUser[]>;
  viewStates = ViewTypes;

  constructor(public readonly stateService: StateService) {}

  ngOnInit(): void {}

  changeView(view: ViewTypes) {
    this.stateService.viewState.next(view);
  }
}
