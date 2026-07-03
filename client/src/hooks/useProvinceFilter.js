import { PROVINCE_NEW } from "../features/timeline/constants/province/provinceNew";
import { PROVINCE_MERGE_MAP } from "../features/timeline/constants/province/provinceMergeMap";
import {useMemo, useState} from 'react';

import { findNewProvinceByOldProvince } from "../features/timeline/utils/findProvince/findNewProvinceByOldProvince";
import { findOldProvinceByNewProvince } from "../features/timeline/utils/findProvince/findOldProvinceByNewProvince";
import { findRegionByNewProvince } from "../features/timeline/utils/findProvince/findRegionByNewProvince";
import { ALL_OLD_PROVINCES } from "../features/timeline/constants/province/searchProvince/provinceAllOld";

export default function useProvinceFilter(
    formInput,
    setFormInput
){
    const handleChangeRegion = (region) => {
      setFormInput(prev => ({
        ...prev,
        region,
        newHomeTown:'',
        oldHomeTown:'',
      }));
    }
    const handleChangeNewHomeTown = (newHomeTown) =>{
       const region = findRegionByNewProvince(newHomeTown);
       setFormInput(prev=>({
        ...prev,
        region,
        newHomeTown,
        oldHomeTown:'',
       }));
    }
    const handleChangeOldHomeTown = (oldHomeTown) =>{
       const newHomeTown = findNewProvinceByOldProvince(oldHomeTown);
       const region = findRegionByNewProvince(newHomeTown);
       setFormInput(prev=>({
        ...prev,
        region,
        newHomeTown,
        oldHomeTown,
       }));
    }

    const filteredNewHomeTowns = useMemo(()=>{
        if (!formInput.region){
            return PROVINCE_NEW
        }
        return PROVINCE_NEW.filter(
            province=>province.region===formInput.region
        );
    }, [formInput.region]);

    const filteredOldHomeTowns = useMemo(()=>{
        if (!formInput.newHomeTown){
            return ALL_OLD_PROVINCES;
        }
        return PROVINCE_MERGE_MAP[formInput.newHomeTown] || [];
    }, [formInput.newHomeTown]);

    return {
        filteredNewHomeTowns,
        filteredOldHomeTowns,
        handleChangeRegion,
        handleChangeNewHomeTown,
        handleChangeOldHomeTown
    };
}