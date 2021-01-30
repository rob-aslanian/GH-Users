import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ViewTypes } from '../../models/common/common.constants';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  public viewStates = ViewTypes;
  viewState: BehaviorSubject<ViewTypes> = new BehaviorSubject(ViewTypes.LIST);

  constructor() {}
}
