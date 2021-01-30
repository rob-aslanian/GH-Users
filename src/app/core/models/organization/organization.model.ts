import { ModelAbstract } from '../../classes/model/model.asbstract';
import { IUserOrganization } from './organization.interfaces';

export class UserOrganization
  extends ModelAbstract
  implements IUserOrganization {
  id: number = null;
  login: string = null;
  avatar_url: string = null;

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
