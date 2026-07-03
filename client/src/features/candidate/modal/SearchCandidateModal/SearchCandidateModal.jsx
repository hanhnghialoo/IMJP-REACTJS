import './SearchCandidateModal.css'
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

import Button from '../../../../components/common/Button/Button';
import SearchRowTop from './section/SearchRowTop/SearchRowTop';
import SearchRowCenter from './section/SearchRowCenter/SearchRowCenter';
import SearchRowBottom from './section/SearchRowBottom/SearchRowBottom';

import { FaRegCircleXmark } from "react-icons/fa6";
import { IoChatbubbles } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { RiResetLeftLine } from "react-icons/ri";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchCandidateModal({
    onCloseSearchCandidate
}){
    const {t} = useTranslation();
    const initialData = {
        fullName: '',
        gender: '',
        age: {
            min: 18,
            max: 35,
        },
        region:'',
        newHomeTown:'',
        oldHomeTown:'',
        sourceChannel:'',
        consultationDate:'',
        timelineStep:'',
        consulPeriod:'',
        consulDateFrom:'',
        consulDateTo:'',
        timeline:'',
        eligibility:'',
        consultationStatus:'',
        documentStatus:'',
        examStatus:'',
    }
    const [formInput, setFormInput] = useState(initialData);
    const handleResetInput = () => {
        setFormInput(initialData)
    }
    const handleChangeInput = (field) => (e) =>{
        setFormInput(prev => ({
            ...prev,
            [field]: e.target.value
    }))
    }
    const handleChangeRange = (field) => (value) =>{
        setFormInput(prev => ({
            ...prev,
            [field]: value
   }))
   }
    return(
        <div className='modal-search-card'>
            <div className='modal-search-content'>

                <div className='modal-search-header'>
                    <div className='modal-search-title'>
                        {t('candidateToolbar:searchAdvance')}
                    </div>
                    <Button
                        icon={<FaRegCircleXmark/>}
                        className='btn-close-modal-create'
                        onClick={onCloseSearchCandidate}
                    />
                </div>

                <div className='modal-search-divider'></div>

                <div className='modal-search-middle'>
                    <div className='modal-search-middle-title'>
                        <FaUserCircle/> 
                        <span>{t('search:personalInformation')}</span>
                    </div>
                    <SearchRowTop
                        handleChangeInput={handleChangeInput}
                        handleChangeRange={handleChangeRange}
                        formInput={formInput}
                    />
                    <SearchRowCenter
                        handleChangeInput={handleChangeInput}
                        formInput={formInput}
                        setFormInput={setFormInput}
                    />
                     <div className='modal-search-middle-title'>
                        <IoChatbubbles/> 
                        <span>{t('candidate:consultationInformation')}</span>
                    </div>
                    <SearchRowBottom
                        handleChangeInput={handleChangeInput}
                        formInput={formInput}
                        setFormInput={setFormInput}
                    />
                   
                </div>

                <div className='modal-search-divider'></div>

                <div className='modal-search-bottom'>
                    <div className='modal-search-group-left'>
                        <Button
                            label={t('search:reset')}
                            variant='normal'
                            className='reset-search-modal'
                            icon={<RiResetLeftLine/>}
                            onClick={handleResetInput}
                        />
                    </div>
                    <div className='modal-search-group-right'>
                        <Button
                            label={t('common:cancel')}
                            variant='danger'
                            className='cancel-search-modal'
                            onClick={onCloseSearchCandidate}
                        />
                        <Button
                            label={t('search:search')}
                            variant='primary'
                            icon={<FaMagnifyingGlass/>}
                            className='confirm-search-modal'
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}