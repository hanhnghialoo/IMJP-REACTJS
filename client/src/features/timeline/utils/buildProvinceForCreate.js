import { PROVINCE_NEW } from "../constants/province/provinceNew";

export const buildProvinceForCreate= (t) => [
    {
        value:'',
        label:t('')
    },
    ...PROVINCE_NEW.map(province => ({
        value: province.code,
        label: province.name
    }))
];