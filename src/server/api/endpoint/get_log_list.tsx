import { Expose } from "class-transformer";
import { plainToInstance } from "class-transformer";
import api from "../api";
import { Log } from "@/data/model/log";

export default async function getLogList(id: number) {
  const response = await api.get(`/video/list?homecamid=${id}`);
  const data = response.data;
  const logList = plainToInstance(LogResponse, data);
  return logList.map(
    (log) => new Log(log.logId, log.videoUrl, new Date(log.timestamp))
  );
}

class LogResponse {
  @Expose({ name: "id" }) logId: number;
  @Expose({ name: "homecamid" }) homecamId: number;
  @Expose({ name: "videourl" }) videoUrl: string;
  @Expose({ name: "savetime" }) timestamp: string;

  constructor(
    logId: number,
    homecamId: number,
    videoUrl: string,
    timestamp: string
  ) {
    this.logId = logId;
    this.homecamId = homecamId;
    this.videoUrl = videoUrl;
    this.timestamp = timestamp;
  }
}
