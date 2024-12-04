export class User {
  id: string;
  name: string;
  serialNumber: string;
  email: string;

  constructor(id: string, name: string, serialNumber: string, email: string) {
    this.id = id;
    this.name = name;
    this.serialNumber = serialNumber;
    this.email = email;
  }
}

