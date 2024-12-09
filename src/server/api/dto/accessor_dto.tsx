export class AccessorDto {
  id: number;
  identifier: string;
  name: string;
  phone_num: string;

  constructor(id: number, identifier: string, name: string, phone_num: string) {
    this.id = id;
    this.identifier = identifier;
    this.name = name;
    this.phone_num = phone_num;
  }
}
