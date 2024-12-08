import api from "@/server/api/api";
import { Accessor } from "@/data/model/accessor";

export default async function getAccessor(accessorId: number) {
  try {
    // TODO: 유저 정보 가져오기
    return new Accessor(accessorId, "test");
  } catch (error) {
    console.error(error);
  }
}
