import { Me } from "@/data/model/me";
import api from "../api";

export const getMyInfo = async (id: number): Promise<Me | null> => {
  try {
    const response = await api.get(`/user/?id=${id}`);
    const dto = response.data as UserInfoResponse;
    const user = new Me(dto.id, dto.identifier, dto.name);
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export class UserInfoResponse {
  id: number;
  identifier: string;
  name: string;
  phoneNumber: string;

  constructor(id: number, identifier: string, name: string, phoneNumber: string) {
    this.id = id;
    this.identifier = identifier;
    this.name = name;
    this.phoneNumber = phoneNumber;
  }
}
