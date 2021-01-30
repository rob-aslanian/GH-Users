import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { finalize, takeUntil, tap } from 'rxjs/operators';
import { IUser } from 'src/app/core/models/user';
import { StateService } from 'src/app/core/services/state/state.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'gh-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss'],
})
export class UserContainerComponent implements OnInit, OnDestroy {
  users: IUser[] = [];
  isLoading = false;

  destroy$: Subject<never> = new Subject();

  constructor(
    private readonly userService: UserService,
    public readonly stateService: StateService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(id?: number) {
    this.isLoading = true;
    this.userService
      .getUsers(id)
      .pipe(
        tap(() => (this.isLoading = true)),
        finalize(() => (this.isLoading = false)),
        takeUntil(this.destroy$)
      )
      .subscribe((users) => this.users.push(...users));
  }

  onScroll(scrolled: boolean, lastUserID: number) {
    if (scrolled && lastUserID) {
      this.getUsers(lastUserID);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
