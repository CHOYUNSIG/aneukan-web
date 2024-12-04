import { User } from "../../data/model/user";
import { convertUserInfoResponseToUser } from "../../data/dto/back/converters";
import { LoginRequest, RegisterRequest } from "../../data/dto/back/responses";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export const register = async (user: RegisterRequest) => {
  try {
    const response = await api.post("/api/auth/register", user);

    return convertUserInfoResponseToUser(response.data);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const login = async (user: LoginRequest) => {
  try {
    const response = await api.post("/api/auth/login", user);

    return convertUserInfoResponseToUser(response.data);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getUserInfo = async (id: string): Promise<User | null> => {
  try {
    const response = await api.get(`/api/user/info?id=${id}`);
    return convertUserInfoResponseToUser(response.data);
  } catch (error) {
    console.error(error);
    return null;
  }
};
