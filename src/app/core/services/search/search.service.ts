import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { debounceTime, filter, map, switchMap } from 'rxjs/operators';
import { User } from '../../models/user';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchedHistory$: BehaviorSubject<string[]> = new BehaviorSubject<
    string[]
  >([]);

  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) {}

  get searchedHistory(): Observable<string[]> {
    return this.searchedHistory$
      .asObservable()
      .pipe(map(() => this.getNames()));
  }

  searchUser(name: string): Observable<User> {
    return of(name).pipe(
      filter((el) => !!el),
      debounceTime(500),
      switchMap((el) => this.userService.getUser(el))
    );
  }

  removeName(name: string): void {
    const names = this.getNames().filter((el) => el !== name);
    this.updateNames(names);
  }

  redirect(name: string) {
    this.router.navigateByUrl(name);
  }

  handleSearchKeyword(name: string) {
    let names = this.getNames();

    if (!names.includes(name)) {
      names.length === 3 && (names = names.splice(1, 2));
      this.updateNames([...names, name]);
    }
  }

  private getNames(): string[] {
    const lsNames = localStorage.getItem('names');
    if (lsNames) {
      return JSON.parse(lsNames);
    }

    return this.searchedHistory$.getValue();
  }

  private updateNames(result: string[]) {
    localStorage.setItem('names', JSON.stringify(result));
    this.searchedHistory$.next(result);
  }
}
