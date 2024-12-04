import { Expose } from "class-transformer";

export class RegisterRequest {
  @Expose({ name: "userId" }) id: string;
  @Expose({ name: "nickname" }) name: string;
  @Expose({ name: "serialnum" }) serialNumber: string;
  @Expose({ name: "password" }) password: string;

  constructor(id: string, name: string, serialNumber: string, password: string) {
    this.id = id;
    this.name = name;
    this.serialNumber = serialNumber;
    this.password = password;
  }
}

export class LoginRequest {
  @Expose({ name: "id" }) id: string;
  @Expose({ name: "password" }) password: string;

  constructor(id: string, password: string) {
    this.id = id;
    this.password = password;
  }
}

export class UserInfoResponse {
  @Expose({ name: "id" }) id: string;
  @Expose({ name: "name" }) name: string;
  @Expose({ name: "email" }) email: string;
  @Expose({ name: "serialnum" }) serialNumber: string;

  constructor(id: string, name: string, email: string, serialNumber: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.serialNumber = serialNumber;
  }
}
