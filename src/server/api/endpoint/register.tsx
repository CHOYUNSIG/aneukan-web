import api from "../api";
import { Expose } from "class-transformer";

export const register = async (
  id: string,
  name: string,
  serialNumber: string,
  password: string
) => {
  try {
    const request = new RegisterRequest(name, serialNumber, password);
    const response = await api.post(`/homecam/?userid=${id}`, request);

    const token = new String(response.data);

    return token;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export class RegisterRequest {
  @Expose({ name: "nickname" }) name: string;
  @Expose({ name: "serialnum" }) serialNumber: string;
  @Expose({ name: "password" }) password: string;

  constructor(
    name: string,
    serialNumber: string,
    password: string
  ) {
    this.name = name;
    this.serialNumber = serialNumber;
    this.password = password;
  }
}
