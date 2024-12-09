export class Log {
  id: number;
  homecamId: number;
  videoUrl: string;
  timestamp: Date;

  constructor(id: number, homecamId: number, videoUrl: string, timestamp: Date) {
    this.id = id;
    this.homecamId = homecamId;
    this.videoUrl = videoUrl;
    this.timestamp = timestamp;
  }
}
