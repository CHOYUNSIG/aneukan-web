export class MeDto {
    id: number;
    userid: number;
    serialnum: string;
    nickname: string;
  
    constructor(id: number, userid: number, serialnum: string, nickname: string) {
      this.id = id;
      this.userid = userid;
      this.serialnum = serialnum;
      this.nickname = nickname;
    }
  }