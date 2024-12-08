import api from "@/server/api/api";
import { Expose } from "class-transformer";

export default async function permitAccess(
  accessorId: number,
  serialNumber: string,
  permit: boolean
) {
  try {
    const request = new PermitAccessRequest(accessorId, serialNumber, permit);
    const response = await api.post("/homecam/access", request);

    return response.status === 200;
  } catch (error) {
    console.error(error);
  }
}

class PermitAccessRequest {
  @Expose({ name: "userId" }) accessorId: number;
  @Expose({ name: "userhomecam" }) serialNumber: string;
  @Expose({ name: "access" }) permit: boolean;

  constructor(accessorId: number, serialNumber: string, permit: boolean) {
    this.accessorId = accessorId;
    this.serialNumber = serialNumber;
    this.permit = permit;
  }
}

