import { PROVINCE_MERGE_MAP } from "../provinceMergeMap";

export const OLD_TO_NEW_MAP = Object.entries(PROVINCE_MERGE_MAP)
    .reduce((acc, [newCode, oldList]) => {
        oldList.forEach(oldProvince => {
            acc[oldProvince] = newCode;
        });
        return acc;
    }, {}); 