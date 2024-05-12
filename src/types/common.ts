import { USER_ROLES } from "@/contants/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type IMeta = {
  page: number;
  limit: number;
  total: number;
};


export type UserRole = keyof typeof USER_ROLES;

export interface DrawerItem {
  title?:string;
  path?:string;
  parentPath?:string;
  icon?:OverridableComponent<SvgIconTypeMap<{},"svg">>&{muiName:string};
  child?:DrawerItem[]
}

 export type ResponseSuccessType = {
  data:any;
  meta?:IMeta
 }
 
export const Gender = ["MALE", "FEMALE"]


export type ISchedule = {
  [x: string]: any;
  id?: string;
  startDate: string;
  endDate: string;
};

export type IScheduleFrom = {
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
};
