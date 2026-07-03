import { NEW_TO_REGION_MAP } from "../../constants/province/searchProvince/provinceNewtoRegion"

export const findRegionByNewProvince = (newCode) => {
    return NEW_TO_REGION_MAP[newCode] || '';
}