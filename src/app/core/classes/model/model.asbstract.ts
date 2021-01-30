export abstract class ModelAbstract {
  protected handleParams(): void {
    if (this.params) {
      Object.entries(this.params).forEach(([key, value]) => {
        if (this.hasOwnProperty(key)) {
          this[key] = value;
        }
      });
    }
  }

  abstract get _id(): number;
  abstract get _name(): string;

  constructor(protected params: any) {}
}
