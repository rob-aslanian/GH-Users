import { Observable } from 'rxjs';
import { IUserOrganization } from '../organization';
import { IUserRepository } from '../repository';

export interface IUser extends IUserOrganization {
  type: string;
  html_url: string;
  repos: Observable<IUserRepository[]>;
  orgs: Observable<IUserOrganization[]>;
}
