import common from "../../public/locales/en/common.json";

export type TKey = keyof typeof common;

export interface Options {
  [key: string]: any;
}

// export interface Data {
//   [key: string]: keyof typeof data[0];
// }

export enum Pages {
  DoctorsList = "/doctor-list",
  Doctors = "/",
}
