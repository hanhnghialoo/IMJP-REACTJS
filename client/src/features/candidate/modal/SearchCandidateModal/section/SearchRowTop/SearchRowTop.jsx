import './SearchRowTop.css';

import Input from '../../../../../../components/common/Input/Input';
import Select from '../../../../../../components/common/Select/Select';
import RangeSlider from '../../../../../../components/common/RangeSlider/RangeSlider';
import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { MdKeyboardArrowDown } from "react-icons/md";


export default function SearchRowTop({
    handleChangeInput,
    handleChangeRange,
    formInput,
}){
    const {t} = useTranslation();
    return(
        <div className='modal-search-row-top'>
            <Input
                label={t('candidate:fullname')}
                value={formInput?.fullName}
                className='search full-name'
                placeholder='Nguyen Van A...'
                onChange={handleChangeInput('fullName')}
            />
            <Select
                label={t('candidate:sex')}
                placeholder={t('modalEdit:selectGender')}
                value={formInput.gender}
                onChange={handleChangeInput('gender')}
                options={[
                    {   
                        value:'',
                        label:`${t('common:any')}`
                    },
                    {
                        value:'male',
                        label:`${t('candidate:male')}`
                    },
                    {
                        value:'female',
                        label:`${t('candidate:female')}`
                    },   
                ]}
                className={'select-search gender'}
                endIcon={<MdKeyboardArrowDown/>}
            />
            <RangeSlider
                label={t('search:ageRanger')}
                min={16}
                max={40}
                step={1}
                value={formInput.age}
                onChange={handleChangeRange('age')}
            />
        </div>
    )
}