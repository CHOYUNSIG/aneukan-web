import { Accessor } from "@/data/model/accessor";
import api from "@/server/api/api";
import { plainToInstance } from "class-transformer";

export default async function getAccessorList(serialNumber: string) {
  try {
    const response = await api.get(
      `/homecam/accesshomecam?serialnum=${serialNumber}`
    );
    const accessorList = plainToInstance(AccessorResponse, response.data).map(
      (accessor: AccessorResponse) => {
        return new Accessor(accessor.userid, accessor.access);
      }
    );

    return accessorList;
  } catch (error) {
    console.error(error);
  }
}

class AccessorResponse {
  id: number;
  userid: number;
  userhomecam: string;
  access: boolean;

  constructor(id: number, userid: number, userhomecam: string, access: boolean) {
    this.id = id;
    this.userid = userid;
    this.userhomecam = userhomecam;
    this.access = access;
  }
}
