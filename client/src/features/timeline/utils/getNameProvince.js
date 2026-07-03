import { PROVINCE_NEW } from "../constants/province/provinceNew";
export const getNameProvince = (code) => {
    return(
        PROVINCE_NEW.find(
            province => province.code === code)?.name || ''
        );
}