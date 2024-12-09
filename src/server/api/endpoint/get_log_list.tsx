import { plainToInstance } from "class-transformer";
import api from "../api";
import { Log } from "@/data/model/log";
import { LogDto } from "../dto/log_dto";

export default async function getLogList(id: number) {
  const response = await api.get(`/video/list?homecamid=${id}`);
  const logList = plainToInstance(LogDto, response.data);
  const result = logList.map(
    (log) => new Log(log.id, log.homecamid, log.videourl, new Date(log.savetime))
  );
  console.log("result: ", result);
  return result;
}
