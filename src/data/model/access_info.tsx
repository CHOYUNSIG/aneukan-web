export class AccessInfo {
  accessorId: number;
  homecamSerialNumber: string;
  isAccessable: boolean;

  constructor(
    accessorId: number,
    homecamSerialNumber: string,
    isAccessable: boolean
  ) {
    this.accessorId = accessorId;
    this.homecamSerialNumber = homecamSerialNumber;
    this.isAccessable = isAccessable;
  }
}
