import './QuickFilter.css';

import FloatingRadio from '../../../../common/Radio/FloatingRadio/FloatingRadio';
import { useTranslation } from 'react-i18next';


import { BiCategory } from "react-icons/bi";
import { MdKeyboardArrowUp } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { FaCheck } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { ELIGIBILITY_OPTIONS } from '../../../../../features/candidate/component/Eligibility/eligibilityOptions';
import { STATUS_OPTIONS } from '../../../../../features/candidate/component/Status/statusOptions';
import { RESULT_EXAM_OPTIONS } from '../../../../../features/candidate/component/Exam/ResultExamOptions';
import { STATUS_FITER_OPTIONS } from '../../../../../features/candidate/component/CandidateStatusFilter/CandidateStatusFilter';
import TextButton from '../../../../common/Button/TextButton';
import Button from '../../../../common/Button/Button';

export default function QuickFilter({
    onHideQuickFilter
}){
    const {t} = useTranslation();
    const [ filter, setFilter] = useState();
    useEffect(()=>{
        const fieldQuickFilter = {
            eligibility:'all',
            documentStatus:'all',
            exam:'all',
            candidateStatus:'all'
        }
        setFilter(fieldQuickFilter)
    },[])
    const eligibilityOptions = [
        {
            labelKey: 'common:all',
            value: 'all',
            icon: BiCategory,
            className: 'primary'
        },
       ...ELIGIBILITY_OPTIONS
    ]
    const documentOptions = [
        {
            labelKey: t('common:all'),
            value:'all',
            icon:BiCategory,
            className:'primary'
        },
        ...STATUS_OPTIONS
    ]
    const examOptions = [
        {
            labelKey: t('common:all'),
            value:'all',
            icon: BiCategory,
            className:'primary'
        },
        ...RESULT_EXAM_OPTIONS
    ]
    const candidateOptions = [
        {
            labelKey: t('common:all'),
            value:'all',
            icon:BiCategory,
            className:'primary'
        },
        ...STATUS_FITER_OPTIONS
    ]
    const handleResetQuickFilter= () => {
        setFilter({
            eligibility:'all',
            documentStatus:'all',
            exam:'all',
            candidateStatus:'all'
        })
    }
    return(
        <div className='quick-filter-card'>
            <div className='quick-filter-content-eligibility'>
                <div className='quick-filter-title'>
                    {t('candidate:eligibility')}
                </div>
                <div className='quick-filter-content'>
                    <FloatingRadio
                        options={eligibilityOptions}
                        value={filter?.eligibility}
                        onChange={(e)=> setFilter(prev =>({
                            ...prev,
                            eligibility: e.target.value
                        }))}
                    />
                </div>
            </div>

            <div className='quick-filter-content-document'>
                <div className='quick-filter-title'>
                    {t('candidate:application')}
                </div>
                <div className='quick-filter-content'>
                    <FloatingRadio
                        options={documentOptions}
                        value={filter?.documentStatus}
                        onChange={(e)=> setFilter(prev =>({
                            ...prev,
                            documentStatus: e.target.value
                        }))}
                    />
                </div>
            </div>

            <div className='quick-filter-content-exam'>
                <div className='quick-filter-title'>
                    {t('result:assessment')}
                </div>
                <div className='quick-filter-content'>
                    <FloatingRadio
                        options={examOptions}
                        value={filter?.exam}
                        onChange={(e)=> setFilter(prev =>({
                            ...prev,
                            exam: e.target.value
                        }))}
                    />
                </div>
            </div>

            <div className='quick-filter-content-candidate'>
                <div className='quick-filter-title'>
                    {t('candidate:candidate')}
                </div>
                <div className='quick-filter-content'>
                    <FloatingRadio
                        options={candidateOptions}
                        value={filter?.candidateStatus}
                        onChange={(e)=> setFilter(prev =>({
                            ...prev,
                            candidateStatus: e.target.value
                        }))}
                    />
                </div>
            </div>

            <div className='quick-filter-content-control'>
                <div className='quick-filter-top-control'>
                    <TextButton
                        label={t('common:hideFilter')}
                        endIcon={<MdKeyboardArrowUp/>}
                        className='btn-hide-quick-filter'
                        onClick={onHideQuickFilter}
                    />
                </div>
                <div className='quick-filter-description'>
                    {t('search:filterDecription')}
                </div>
                <div className='quick-filter-confirm'>
                    <Button
                        label={t('search:reset')}
                        icon={<GrPowerReset/>}
                        variant='normal'
                        className='btn-reset-quick-filter'
                        onClick={()=>handleResetQuickFilter()}
                    />
                     <Button
                        label={t('common:apply')}
                        icon={<FaCheck/>}
                        variant='primary'
                        className='btn-apply-quick-filter'
                    />
                </div>
            </div>
        </div>
    )
}