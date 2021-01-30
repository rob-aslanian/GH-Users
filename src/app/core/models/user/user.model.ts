import { Observable } from 'rxjs';
import { ModelAbstract } from '../../classes/model/model.asbstract';
import { IUserOrganization } from '../organization';
import { IUserRepository } from '../repository';
import { IUser } from './user.interfaces';

export class User extends ModelAbstract implements IUser {
  id: number = null;
  login: string = null;
  avatar_url: string = null;
  type: string = null;
  html_url: string = null;
  repos: Observable<IUserRepository[]>;
  orgs: Observable<IUserOrganization[]>;

  constructor(params: any) {
    super(params);

    this.handleParams();
  }

  get _id(): number {
    return this.id;
  }
  get _name(): string {
    return this.login;
  }
}
