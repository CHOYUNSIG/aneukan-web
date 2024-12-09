import { AccessInfo } from "@/data/model/access_info";
import api from "@/server/api/api";
import { plainToInstance } from "class-transformer";
import { AccessInfoDto } from "../dto/access_info_dto";

export default async function getAccessInfoList(serialNumber: string) {
  try {
    const response = await api.get(
      `/homecam/accesshomecam?serialnum=${serialNumber}`
    );
    const accessorList = plainToInstance(AccessInfoDto, response.data).map(
      (accessor: AccessInfoDto) => {
        return new AccessInfo(accessor.id, accessor.userhomecam, accessor.access);
      }
    );
    
    console.log("accessorList: ", accessorList);
    return accessorList;
  } catch (error) {
    console.error(error);
  }
}