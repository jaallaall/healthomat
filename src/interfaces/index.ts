import common from "../../public/locales/en/common.json";

export type TKey = keyof typeof common;

export interface Options {
  [key: string]: any;
}

export enum Pages {
  DoctorsList = "/doctor-list",
  Doctors = "/",
}
