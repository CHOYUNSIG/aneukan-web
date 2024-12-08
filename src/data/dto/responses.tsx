export class LoginRequest {
  id: string;
  password: string;

  constructor(id: string, password: string) {
    this.id = id;
    this.password = password;
  }
}

export class LoginResponse {
  token: string | null;

  constructor(token: string | null) {
    this.token = token;
  }
}

export class RegisterRequest {
  id: string;
  name: string;
  password: string;
  serialNumber: string;

  constructor(id: string, name: string, password: string, serialNumber: string) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.serialNumber = serialNumber;
  }
}

