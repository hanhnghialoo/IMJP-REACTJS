import { PROVINCE_NEW } from "../provinceNew";

export const NEW_TO_REGION_MAP = PROVINCE_NEW.reduce((acc, province)=>{
    acc[province.code] = province.region;
    return acc;
},{});