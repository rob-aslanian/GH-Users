import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiConfig, API_CONFIG } from '../../injectors/api.injector';
import { IUserOrganization, UserOrganization } from '../../models/organization';
import { IUserRepository, UserRepository } from '../../models/repository';
import { IUser, User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    @Inject(API_CONFIG) private readonly apiConfig: ApiConfig,
    private readonly http: HttpClient
  ) {}

  getUsers(since?: number, count: number = 6): Observable<IUser[]> {
    let params = this.getRequestCountParams(count);
    if (since) {
      params = params.set('since', String(since));
    }

    return this.http
      .get<any[]>(this.apiConfig.path, { params })
      .pipe(
        map((users) => {
          return users.map((user$) => {
            const user = new User(user$);
            user.repos = this.getUserRepos(user._name);

            return user;
          });
        })
      );
  }

  getUser(name: string): Observable<User> {
    return this.http.get(`${this.apiConfig.path}/${name}`).pipe(
      map((user$) => {
        const user = new User(user$);
        user.repos = this.getUserRepos(user._name);
        user.orgs = this.getUserOrganizations(user._name);

        return user;
      })
    );
  }

  getUserRepos(name: string): Observable<IUserRepository[]> {
    const params = this.getRequestCountParams(3);
    return this.http
      .get<any[]>(`${this.apiConfig.path}/${name}/repos`, { params })
      .pipe(map((repos) => repos.map((repo) => new UserRepository(repo))));
  }

  getUserOrganizations(name: string): Observable<IUserOrganization[]> {
    const params = this.getRequestCountParams(3);
    return this.http
      .get<any[]>(`${this.apiConfig.path}/${name}/orgs`, { params })
      .pipe(map((orgs) => orgs.map((org) => new UserOrganization(org))));
  }

  private getRequestCountParams(count: number): HttpParams {
    let params = new HttpParams();
    params = params.set('per_page', String(count));

    return params;
  }
}
