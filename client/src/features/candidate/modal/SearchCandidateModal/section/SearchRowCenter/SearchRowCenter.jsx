import './SearchRowCenter.css';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

import Input from '../../../../../../components/common/Input/Input';
import Select from '../../../../../../components/common/Select/Select';
import useProvinceFilter from '../../../../../../hooks/useProvinceFilter';
import { SOURCE_OPTIONS } from '../../../../../sourceCandidate/sourceOptions';
import { CONSULT_PERIOD_OPTIONS } from '../../../../../timeline/utils/consultPeriod/consultPeriod';
import Badge from '../../../../../../components/common/Badge/Badge';
import DropdownSelect from '../../../../../../components/common/DropdownSelect/DropdownSelect';

import { MdKeyboardArrowDown } from "react-icons/md";

function SearchRowCenter({
    handleChangeInput,
    formInput,
    setFormInput
}){
    const {t} = useTranslation();
    const {
        filteredNewHomeTowns,
        filteredOldHomeTowns,
        handleChangeRegion,
        handleChangeNewHomeTown,
        handleChangeOldHomeTown
    } = useProvinceFilter(formInput, setFormInput);
    const currentSource = SOURCE_OPTIONS.find(
        item => item.value === formInput.sourceChannel
    );
    
    const CurrentIcon = currentSource?.icon;
    const sourceOptions = useMemo(() => {
        return [
            {
                value: '',
                content: (
                    <Badge
                        label={t('common:any')}
                    />
                ),
                onClick: () => {setFormInput(prev => ({
                    ...prev,
                    sourceChannel:''
                }))}
            },
            ...SOURCE_OPTIONS.map(option => {
                const Icon = option.icon;
                return {
                    value: option.value,
                    content: (
                        <Badge
                            label={t(option.label)}
                            startIcon={
                                <Icon
                                    width='auto'
                                    height={20}
                                />
                            }
                            className='option-select-source'
                        />
                    ),
                    onClick: () => {setFormInput(prev =>({
                        ...prev,
                        sourceChannel:option.value,
                        sourceLabel: option.label
                    }))}
                };
            })
        ];
    }, [t, handleChangeInput]);

    return(
        <div className='modal-search-row-center'>
            <div className='modal-search-row-card-one'>
                <Select
                    label={t('search:region')}
                    value={formInput.region}
                    options={[
                        {
                            value:'',
                            label:`${t('common:any')}`
                        },
                        {
                            value: 'NORTH',
                            label:`${t('search:north')}`
                        },
                        {
                            value: 'CENTRAL',
                            label:`${t('search:central')}`
                        },
                        {
                            value: 'SOUTH',
                            label:`${t('search:south')}`
                        }
                    ]}
                    endIcon={<MdKeyboardArrowDown/>}
                    onChange={(e)=>handleChangeRegion(e.target.value)}
                    className={'select-search region'}
                />
                <Select
                    label={t('candidate:newProvince')}
                    value={formInput.newHomeTown}
                    options={[
                        {
                            value: '',
                            label: `${t('common:any')}`
                        },
                        ...filteredNewHomeTowns.map(item=>({
                            value: item.code,
                            label: item.name
                        }))
                    ]}
                    endIcon={<MdKeyboardArrowDown/>}
                    onChange={(e)=>handleChangeNewHomeTown(e.target.value)}
                    className={'select-search new-province'}
                />
                <Select
                    label={t('candidate:oldProvince')}
                    value={formInput.oldHomeTown}
                    options={[
                        {
                            value: '',
                            label: `${t('common:any')}`
                        },
                        ...filteredOldHomeTowns.map(item=>({
                            value: item,
                            label: item
                        }))
                    ]}
                    endIcon={<MdKeyboardArrowDown/>}
                    onChange={(e)=>handleChangeOldHomeTown(e.target.value)}
                    className={'select-search old-province'}
                />
            </div>
            <div className='modal-search-row-card-two'>
                    <DropdownSelect
                        label={t('candidate:sourceChannel')}
                        trigger={()=>(
                            <Badge
                                label={currentSource ? t(formInput.sourceLabel) : t('common:any')
                                }
                                startIcon={
                                    CurrentIcon 
                                        ? (<CurrentIcon
                                            width='auto'
                                            height={30}
                                        />)
                                        : null
                                }
                                className={'search-modal-source-channel'}
                                endIcon={<MdKeyboardArrowDown
                                    className='icon-search-dropdown'
                                />}
                            />
                        )}
                        options={sourceOptions}
                        className='search-source'
                    />
                    <Select
                        label={t('candidate:consultationDate')}
                        value={formInput.consulPeriod}
                        options={CONSULT_PERIOD_OPTIONS.map(item=>({
                            value: item.value,
                            label: t(item.label)
                        }))}
                        endIcon={<MdKeyboardArrowDown/>}
                        onChange={(e)=>{
                            const value = e.target.value;
                            setFormInput(prev => ({
                                ...prev,
                                consulPeriod: value,
                                ...(value!=='CUSTOM' && {
                                    consulDateFrom:'',
                                    consulDateTo:'',
                                })
                            }))
                        }}
                        className='search-date-consultation'
                    />
                    {formInput.consulPeriod==='CUSTOM' &&
                        <div className='custom-date-range'>
                            <Input
                                label={t('search:fromDate')}
                                type='date'
                                value={formInput.consulDateFrom}
                                onChange={handleChangeInput('consulDateFrom')}
                                className='search-date-from'
                            />
                            <Input
                                label={t('search:fromTo')}
                                type='date'
                                value={formInput.consulDateTo}
                                onChange={handleChangeInput('consulDateTo')}
                                className='search-date-to'
                            />
                        </div>
                    }
                    <Select
                        label={t('timeline:timeline')}
                        value={formInput.timeline}
                        options={[
                            {   
                                value:'',
                                label:`${t('common:any')}`
                            },
                            {
                                value:'consultation',
                                label:`${t('timeline:consultation')}`
                            },
                            {
                                value:'application',
                                label:`${t('timeline:application')}`
                            },
                            {
                                value:'assessment',
                                label:`${t('timeline:assessment')}`
                            },   
                            {
                                value:'result',
                                label:`${t('timeline:result')}`
                            },    
                        ]}
                        endIcon={<MdKeyboardArrowDown/>}
                        onChange={handleChangeInput('timeline')}
                        className='search-timeline'
                    />
            </div>  
            <div className='modal-search-child-divider'></div>

        </div>
    )
}

export default SearchRowCenter