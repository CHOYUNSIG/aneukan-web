export class Accessor {
  id: number;
  isPermitted: boolean;

  constructor(id: number, isPermitted: boolean) {
    this.id = id;
    this.isPermitted = isPermitted;
  }
}
