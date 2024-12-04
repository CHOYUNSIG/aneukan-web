import { LoginRequest, RegisterRequest } from "@/data/dto/front/responses";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.BACKEND_URL,
});

export const login = async (id: string, password: string) => {
  const request = new LoginRequest(id, password);
  const response = await api.post("/api/auth/login", request);
  return response.data.token as string;
};

export const register = async (
  id: string,
  password: string,
  serialNumber: string
) => {
  const request = new RegisterRequest(id, password, serialNumber);
  const response = await api.post("/api/auth/register", request);
  return response.status === 200;
};

export default api;
