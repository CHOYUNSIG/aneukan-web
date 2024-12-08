import { Me } from "@/data/model/me";
import api from "../api";
import { Expose, plainToInstance } from "class-transformer";

export const getMyInfo = async (): Promise<Me | null> => {
  try {
    const response = await api.get(`/api/user`);

    const userInfoResponse = plainToInstance(
      UserInfoResponse,
      response.data
    )[0];

    const user = new Me(
      userInfoResponse.id,
      userInfoResponse.name,
      userInfoResponse.email,
      userInfoResponse.serialNumber
    );

    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export class UserInfoResponse {
  @Expose({ name: "id" }) id: number;
  @Expose({ name: "name" }) name: string;
  @Expose({ name: "email" }) email: string;
  @Expose({ name: "serialnum" }) serialNumber: string;

  constructor(id: number, name: string, email: string, serialNumber: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.serialNumber = serialNumber;
  }
}
