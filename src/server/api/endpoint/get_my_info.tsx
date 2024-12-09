import { Me } from "@/data/model/me";
import api from "../api";
import { AccessorDto } from "../dto/accessor_dto";

export const getMyInfo = async (id: number): Promise<Me | null> => {
  try {
    const accessorResponse = await api.get(`/user/?id=${id}`);
    const accessorDto = accessorResponse.data as AccessorDto;
    
    /*
    const meResponse = await api.get(`/homecam/?serialnum=${accessorDto.serialnum}`);
    const meDto = meResponse.data as MeDto;
    */

    const me = new Me(accessorDto.id, accessorDto.identifier, accessorDto.name, "알 수 없음");
    console.log("user: ", me);
    return me;
  } catch (error) {
    console.error(error);
    return null;
  }
};