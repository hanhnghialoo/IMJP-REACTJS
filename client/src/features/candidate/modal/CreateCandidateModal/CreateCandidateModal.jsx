import './CreateCandidateModal.css';
import { useTranslation } from 'react-i18next';

import Button from '../../../../components/common/Button/Button';
import Input from '../../../../components/common/Input/Input';
import Select from '../../../../components/common/Select/Select';

import { useState, useEffect, useMemo } from 'react';
import { formatPhoneNumber } from '../../../../utils/formatPhoneNumber';
import { buildProvinceForCreate } from '../../../timeline/utils/buildProvinceForCreate';

import { FaRegCircleXmark } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaMars } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiUserAdd } from "react-icons/hi";
import { MdCalendarMonth } from "react-icons/md";
import { HiPhone } from "react-icons/hi2";
import { IoLocation } from "react-icons/io5";
import { IoCreate } from "react-icons/io5";

import hasChanges from '../../../../utils/Modal/hasChanges';
import { validateField } from '../../../../utils/Validation/validateField';
import { validateForm } from '../../../../utils/Validation/validateForm';
import { rulesCreateCandidateField } from './createCandidateRulesField';
import useProvinceFilter from '../../../../hooks/useProvinceFilter';

export default function CreatCandidateModal({
    onCloseCreateCandidate,
    inputNameRef
}){
    const {t} = useTranslation();
    const [ errors, setErrors] = useState({});
    const [ touched, setTouched] = useState({});
    const [ formCreateCandidate, setFormCreateCandidate] = useState({
        fullName: '',
        gender: '',
        dateOfBirth:'',
        phone:'',
        newHomeTown:'',
        region:''
    });
    const {handleChangeNewHomeTown} = useProvinceFilter(formCreateCandidate, setFormCreateCandidate);

    const handleChangeInput = (field)=> (e) => {
        const value = e.target.value;
        setFormCreateCandidate(prev => ({
            ...prev,
            [field]: value
        }));
        const error = validateField(field, value, rulesCreateCandidateField);
        setErrors(prev => ({
            ...prev,
            [field]: error
        }));
    }
    const handleBlur = (field) => () => {
        const error = validateField(
            field,
            formCreateCandidate[field],
            rulesCreateCandidateField
        );
        setTouched(prev => ({
            ...prev,
            [field]: true
        }));
        setErrors(prev => ({
            ...prev,
            [field]: error
        }));
    }
    const isFormValid = useMemo(()=>{
        return Object.keys(
            validateForm(formCreateCandidate, rulesCreateCandidateField)
        ).length === 0;
    },[formCreateCandidate])

    return(
        <div className='modal-create-card'>
            <div className='modal-create-content'>

                <div className='modal-create-header'>
                    <div className='modal-create-title'>
                        <IoCreate/>
                        {t('candidateToolbar:addCandidate')}
                    </div>
                    <Button
                        icon={<FaRegCircleXmark/>}
                        className='btn-close-modal-create'
                        onClick={onCloseCreateCandidate}
                    />
                </div>

                <div className='modal-create-divider'></div>

                <div className='modal-create-middle'>
                    <Input
                        ref={inputNameRef}
                        label={t('candidate:fullname')}
                        value={formCreateCandidate?.fullName}
                        placeholder={t('Nguyen Van A')}
                        className='modal create-full-name'
                        endIcon={<FaUser/>}
                        variant='primary'
                        onChange={handleChangeInput('fullName')}
                        error={touched.fullName && `${t(`validate:${errors.fullName}`)}`}
                        onBlur={handleBlur('fullName')}
                    />
                    <Select
                        label={t('candidate:sex')}
                        placeholder={t('modalEdit:selectGender')}
                        onChange={(e)=>setFormCreateCandidate(prev => (
                            {
                                ...prev,
                                gender:e.target.value
                            }
                        ))}
                        options={[
                            {
                                value:'male',
                                label:`${t('candidate:male')}`
                            },
                            {
                                value:'female',
                                label:`${t('candidate:female')}`
                            },   
                        ]}
                        className={'select-modal gender'}
                        endIcon={<MdKeyboardArrowDown/>}
                        variant='primary'
                    />
                    <Input
                        label={t('candidate:dateOfBirth')}
                        value={formCreateCandidate?.dateOfBirth}
                        type='date'
                        className='modal create-date-of-birth'
                        endIcon={<MdCalendarMonth/>}
                        variant='primary'
                        onChange={handleChangeInput('dateOfBirth')}
                    />
                    <Input
                        label={t('candidate:phoneNumber')}
                        value={formatPhoneNumber(formCreateCandidate?.phone)}
                        className='modal create-phone'
                        endIcon={<HiPhone/>}
                        variant='primary'
                        onChange={handleChangeInput('phone')}
                    />
                    <Select
                        label={t('candidate:homeTown')}
                        value={formCreateCandidate?.newHomeTown}
                        onChange={(e)=>handleChangeNewHomeTown(e.target.value)}
                        options={buildProvinceForCreate(t)}
                        className={'select-modal province'}
                        endIcon={<IoLocation/>}
                        variant='primary'
                    />
                    <Input
                        label={t('candidate:region')}
                        value={formCreateCandidate?.region}
                        className='modal create-region'
                    />
                </div>

                <div className='modal-create-bottom'>
                    <Button
                        label={t('common:cancel')}
                        variant='danger'
                        className='cancel-create-modal'
                        onClick={onCloseCreateCandidate}
                    />
                    <Button
                        label={t('common:create')}
                        variant='primary'
                        icon={<HiUserAdd/>}
                        disabled={!isFormValid}
                        className='save-create-modal'
                    />
                </div>
            </div>

        </div>
    )
}