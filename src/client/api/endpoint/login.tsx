import { plainToInstance } from "class-transformer";
import api from "../api";
import { LoginRequest, LoginResponse } from "@/data/dto/responses";

export default async function login(id: string, password: string) {
  const request = new LoginRequest(id, password);
  const response = await api.post("/api/auth/login", request);
  const dto = plainToInstance(LoginResponse, response.data)[0];
  return dto.token;
};