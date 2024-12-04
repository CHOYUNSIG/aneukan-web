import { User } from "../../model/user";
import { UserInfoResponse } from "./responses";

export function convertUserInfoResponseToUser(response: UserInfoResponse): User {
  return new User(response.id, response.name, response.serialNumber, response.email);
}
