import { User } from "@/data/model/user";
import { UserInfoResponse } from "./responses";

export function convertUserInfoResponseToUser(response: UserInfoResponse) {
  return new User(
    response.id,
    response.name,
    response.email,
    response.serialNumber
  );
}
