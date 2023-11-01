import { IBase } from "./IBase";
export interface IEmployee extends IBase {
  id?: string;
  hotelId: string;
  name: string;
  email: string;
  password: string;
  telNo: string;
  sex: string;
  country: string;
  isRoot?: boolean;
  policies?: string[];
}