export class RegisterRequest {
  id: string;
  password: string;
  serialNumber: string;

  constructor(id: string, password: string, serialNumber: string) {
    this.id = id;
    this.password = password;
    this.serialNumber = serialNumber;
  }
}

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

export class UserInfoResponse {
  id: string;
  name: string;
  email: string;
  serialNumber: string;

  constructor(id: string, name: string, email: string, serialNumber: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.serialNumber = serialNumber;
  }
}

export class PermissionRequestListResponse {
  count: number;
  list: {
    id: string;
  }[];

  constructor(count: number, list: { id: string }[]) {
    this.count = count;
    this.list = list;
  }
}

export class PermittedListResponse {
  count: number;
  list: {
    id: string;
    name: string;
    serialNumber: string;
  }[];

  constructor(
    count: number,
    list: { id: string; name: string; serialNumber: string }[]
  ) {
    this.count = count;
    this.list = list;
  }
}
