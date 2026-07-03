import { PROVINCE_NEW } from "../constants/province/provinceNew";

export const buildProvince= (t) => [
    {
        value:'',
        label:t('modalEdit:selectProvince')
    },
    ...PROVINCE_NEW.map(province => ({
        value: province.code,
        label: province.name
    }))
];