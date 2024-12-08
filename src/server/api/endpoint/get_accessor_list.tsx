import { Accessor } from "@/data/model/accessor";
import api from "@/server/api/api";
import { Expose } from "class-transformer";
import { plainToInstance } from "class-transformer";

export default async function getAccessorList(serialNumber: string) {
  try {
    const response = await api.get(
      `/homecam/accesshomcame?serialnum=${serialNumber}`
    );
    const accessorList = plainToInstance(AccessorResponse, response.data).map(
      (accessor: AccessorResponse) => {
        return new Accessor(accessor.accessorId, accessor.permit);
      }
    );

    return accessorList;
  } catch (error) {
    console.error(error);
  }
}

class AccessorResponse {
  @Expose({ name: "userId" }) accessorId: number;
  @Expose({ name: "userhomecam" }) serialNumber: string;
  @Expose({ name: "access" }) permit: boolean;

  constructor(accessorId: number, serialNumber: string, permit: boolean) {
    this.accessorId = accessorId;
    this.serialNumber = serialNumber;
    this.permit = permit;
  }
}
