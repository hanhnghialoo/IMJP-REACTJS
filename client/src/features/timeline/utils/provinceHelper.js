import { PROVINCE_MERGE_MAP } from "../constants/province/provinceMergeMap";

export const getOldProvince = (provinceCode) => {
    return PROVINCE_MERGE_MAP[provinceCode] || [];
};

export const isMergedProvince = (provinceCode) => {
    return !!PROVINCE_MERGE_MAP[provinceCode];
};