export class LogDto {
  id: number;
  homecamid: number;
  videourl: string;
  savetime: string;

  constructor(
    id: number,
    homecamid: number,
    videourl: string,
    savetime: string
  ) {
    this.id = id;
    this.homecamid = homecamid;
    this.videourl = videourl;
    this.savetime = savetime;
  }
}
