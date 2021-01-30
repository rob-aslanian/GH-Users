import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from 'src/app/core/models/user';
import { SearchService } from 'src/app/core/services/search/search.service';

@Component({
  selector: 'gh-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  icon = faSearch;
  user: User;
  userName: string;
  errorMsg: string;

  destroy$: Subject<never> = new Subject();

  constructor(private readonly searchService: SearchService) {}

  ngOnInit(): void {}

  search() {
    this.reset();
    this.userName = this.userName.replace(' ', '-');

    this.searchService
      .searchUser(this.userName)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (user) => {
          this.user = user;
          this.errorMsg = null;
        },
        (err) => {
          if (err instanceof HttpErrorResponse) {
            this.user = null;
            this.errorMsg = err.error?.message;
          }
        }
      );
  }

  saveSearch() {
    if (this.userName && !this.errorMsg) {
      this.searchService.handleSearchKeyword(this.userName);
    }
  }

  reset() {
    this.errorMsg = null;
    this.user = null;
  }

  redirect = () => {
    this.saveSearch();
    this.searchService.redirect(this.userName);
  };

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
