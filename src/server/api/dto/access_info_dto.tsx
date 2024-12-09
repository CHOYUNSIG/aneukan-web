export class AccessInfoDto {
  id: number;
  userid: number;
  userhomecam: string;
  access: boolean;

  constructor(
    id: number,
    userid: number,
    userhomecam: string,
    access: boolean
  ) {
    this.id = id;
    this.userid = userid;
    this.userhomecam = userhomecam;
    this.access = access;
  }
}
