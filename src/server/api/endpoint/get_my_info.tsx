import { Me } from "@/data/model/me";
import api from "../api";
import { Expose } from "class-transformer";

export const getMyInfo = async (id: number): Promise<Me | null> => {
  try {
    const response = await api.get(`/user/?id=${id}`);
    const dto = response.data as UserInfoResponse;
    const user = new Me(dto.id, dto.userId, dto.name, "1234567890");
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export class UserInfoResponse {
  @Expose({ name: "id" }) id: number;
  @Expose({ name: "identifier" }) userId: string;
  @Expose({ name: "name" }) name: string;
  @Expose({ name: "phone_num" }) phoneNumber: string;

  constructor(id: number, userId: string, name: string, phoneNumber: string) {
    this.id = id;
    this.userId = userId;
    this.name = name;
    this.phoneNumber = phoneNumber;
  }
}
