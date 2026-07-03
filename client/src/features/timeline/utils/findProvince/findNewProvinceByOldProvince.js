import { OLD_TO_NEW_MAP } from "../../constants/province/searchProvince/provinceOldtoNew"

export const findNewProvinceByOldProvince = (oldProvince)=>{
    return OLD_TO_NEW_MAP[oldProvince] || '';
}