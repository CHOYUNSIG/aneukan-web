export class Log {
  id: number;
  videoUrl: string;
  timestamp: Date;

  constructor(id: number, videoUrl: string, timestamp: Date) {
    this.id = id;
    this.videoUrl = videoUrl;
    this.timestamp = timestamp;
  }
}
