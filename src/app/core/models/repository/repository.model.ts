import { ModelAbstract } from '../../classes/model/model.asbstract';
import { IUserRepository } from './repository.interfaces';

export class UserRepository extends ModelAbstract implements IUserRepository {
  id: number = null;
  name: string = null;
  clone_url: string = null;

  constructor(params: any) {
    super(params);
    this.handleParams();
  }

  get _id(): number {
    return this.id;
  }
  get _name(): string {
    return this.name;
  }
}
