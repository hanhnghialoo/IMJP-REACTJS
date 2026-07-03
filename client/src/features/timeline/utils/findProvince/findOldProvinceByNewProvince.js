import { PROVINCE_MERGE_MAP } from "../../constants/province/provinceMergeMap"

export const findOldProvinceByNewProvince = (newCode)=>{
    return PROVINCE_MERGE_MAP[newCode] || '';
}