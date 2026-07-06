import './QuickFilter.css';

import FloatingRadio from '../../../../common/Radio/FloatingRadio/FloatingRadio';
import { useTranslation } from 'react-i18next';

import { GoCheckCircleFill } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { GoXCircleFill } from "react-icons/go";
import { IoWarning } from "react-icons/io5";
import { useEffect, useState } from 'react';
import { GoClockFill } from "react-icons/go";
import { BsExclamationOctagonFill } from "react-icons/bs";
import { MdFamilyRestroom } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

export default function QuickFilter(){
    const {t} = useTranslation();
    const [ filter, setFilter] = useState();
    useEffect(()=>{
        const fieldQuickFilter = {
            eligibility:'all',
            documentStatus:'all',
            exam:'all'
        }
        setFilter(fieldQuickFilter)
    },[])
    const eligibilityOptions = [
        {
            label: t('common:all'),
            value: 'all',
            icon: <BiCategory/>,
            className: 'primary'
        },
        {
            label: t('eligibility:eligible'),
            value: 'eligible',
            icon: <GoCheckCircleFill/>,
            className: 'success'
        },
        {
            label: t('eligibility:ineligible'),
            value: 'ineligible',
            icon: <GoXCircleFill/>,
            className: 'danger'
        },
        {
            label: t('eligibility:pending'),
            value: 'pending',
            icon: <IoWarning/>,
            className: 'pending'
        },
    ]
    const documentOptions = [
        {
            label: t('common:all'),
            value:'all',
            icon:<BiCategory/>,
            className:'primary'
        },
        {
            label: t('status:agreed'),
            value:'agreed',
            icon:<GoCheckCircleFill/>,
            className:'agreed'
        },
        {
            label: t('status:considering'),
            value:'considering',
            icon:<GoClockFill/>,
            className:'considering'
        },
        {
            label: t('status:notInterested'),
            value:'notinterested',
            icon:<GoXCircleFill/>,
            className:'notInterested'
        },
        {
            label: t('status:undecided'),
            value:'undecided',
            icon:<BsExclamationOctagonFill/>,
            className:'undecided'
        },
        {
            label: t('status:familyApproval'),
            value:'familyApproval',
            icon:<MdFamilyRestroom/>,
            className:'familyApproval'
        },
    ]
    const examOptions = [
        {
            label: t('common:all'),
            value:'all',
            icon:<BiCategory/>,
            className:'primary'
        },
        {
            label: t('result:passed'),
            value:'passed',
            icon:<GoDotFill/>,
            className:'passed'
        },
        {
            label: t('result:failedRetest'),
            value:'failedRetest',
            icon:<GoDotFill/>,
            className:'failedRetest'
        },
        {
            label: t('result:failedNonRetest'),
            value:'failedNonRetest',
            icon:<GoDotFill/>,
            className:'failedNonRetest'
        },
        {
            label: t('result:postponed'),
            value:'postponed',
            icon:<GoDotFill/>,
            className:'postponed'
        },
        {
            label: t('result:absent'),
            value:'absent',
            icon:<GoDotFill/>,
            className:'absent'
        },
        {
            label: t('result:enrolled'),
            value:'enrolled',
            icon:<GoDotFill/>,
            className:'enrolled'
        },
        {
            label: t('result:notEnrolled'),
            value:'notEnrolled',
            icon:<GoDotFill/>,
            className:'notEnrolled'
        },
    ]
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
        </div>
    )
}