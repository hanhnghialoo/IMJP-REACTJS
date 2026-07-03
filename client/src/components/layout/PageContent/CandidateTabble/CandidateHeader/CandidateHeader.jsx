import './CandidateHeader.css';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

import DropdownCommon from '../../../../common/DropdownCommon/DropdownCommon';

function CandidateHeader(){
    const {t} = useTranslation('');
    const [sort, setSort] = useState({
        field: null,
        order: null,
    });
    const [openSort, setOpenSort]= useState(null);
    const sortNameOptions = [
        {
            label: t('common:sortAZ'),
            icon: <BsArrowUp/>,
            className:'btn-sort-fullname-asc'
        },
        {
            label: t('common:sortZA'),
            icon: <BsArrowDown/>,
            className:'btn-sort-fullname-asc'
        },
    ]
    const sortConsultationOptions = [
        {
            label: t('common:sortByNew'),
            icon: <BsArrowUp/>,
            className:'btn-sort-consultation-timedown'
        },
        {
            label: t('common:sortByOld'),
            icon: <BsArrowDown/>,
            className:'btn-sort-consultation-timeup'
        },
    ]
    return(
        <div className='candidate-header'>
                <div className='candidate-header-no'>#</div>

                <DropdownCommon
                    label={`${t('candidate:fullname')}`}
                    trigger={(isOpen)=>(
                        <div className='candidate-header-fullname-sort'>
                            <MdOutlineKeyboardArrowUp/>
                            <MdOutlineKeyboardArrowDown/>
                        </div>
                    )}
                    options={sortNameOptions}
                    className='candidate-header-fullname'
                />

                <div>{t('candidate:phoneNumber')}</div>

                <DropdownCommon
                    label={`${t('candidate:consultation')}`}
                    trigger={(isOpen)=>(
                        <div className='candidate-header-consultation-sort'>
                            <MdOutlineKeyboardArrowUp/>
                            <MdOutlineKeyboardArrowDown/>
                        </div>
                    )}
                    options={sortConsultationOptions}
                    className='candidate-header-consultation'
                />
            
                <div className='candidate-header-source'>{t('candidate:sourceChannel')}</div>
                <div>{t('candidate:batchCode')}</div>
                {/* <div>{t('candidate:eligibility')}</div> */}
                <div className='candidate-header-timeline'>{t('candidate:timeline')}</div>
                {/* <div>{t('candidate:result')}</div>    */}
        </div>
    )
}

export default CandidateHeader;