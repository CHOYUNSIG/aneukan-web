import { RegisterRequest } from "@/data/dto/responses";
import api from "../api";


export default async function register(
  id: string,
  name: string,
  password: string,
  serialNumber: string
) {
  const request = new RegisterRequest(id, name, password, serialNumber);
  const response = await api.post("/api/auth/register", request);
  return response.status === 200;
};
