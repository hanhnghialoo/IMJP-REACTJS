import './CreateCandidateModal.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Button from '../../../../components/common/Button/Button';
import Input from '../../../../components/common/Input/Input';
import Select from '../../../../components/common/Select/Select';

import { useState, useEffect, useMemo } from 'react';
import { formatPhoneNumber } from '../../../../utils/formatPhoneNumber';
import { buildProvinceForCreate } from '../../../timeline/utils/buildProvinceForCreate';

import { FaRegCircleXmark } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

import { MdKeyboardArrowDown } from "react-icons/md";
import { HiUserAdd } from "react-icons/hi";
import { MdCalendarMonth } from "react-icons/md";
import { HiPhone } from "react-icons/hi2";
import { IoLocation } from "react-icons/io5";
import { IoCreate } from "react-icons/io5";

import { validateField } from '../../../../utils/Validation/validateField';
import { validateForm } from '../../../../utils/Validation/validateForm';
import { rulesCreateCandidateField } from './createCandidateRulesField';
import useProvinceFilter from '../../../../hooks/useProvinceFilter';
import { useCreateCandidate } from '../../hook/useCreateCandidate';
import useToast from '../../../../components/common/Toast/hook/useToast';
import { TOAST_VARIANTS } from '../../../../components/common/Toast/constants/toast.constants';

export default function CreateCandidateModal({
    onCloseCreateCandidate,
    inputNameRef,
    onCreated,
}){
    const {t} = useTranslation();
    const navigate = useNavigate();
    const {addToast} = useToast();
    const [ errors, setErrors] = useState({});
    const [ touched, setTouched] = useState({});
    const [ formCreateCandidate, setFormCreateCandidate] = useState({
        fullName: '',
        gender: 'male',
        dateOfBirth:'',
        phone:'',
        newHomeTown:'',
        region:'',
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

    const {
        isSubmitting,
        submitError,
        submitCandidate,
    } = useCreateCandidate();

    const handlePhoneChange = (e) =>{
        const rawValue = e.target.value;
        const phoneValue = rawValue.replace(/\D/g, '');
        setFormCreateCandidate((currentForm)=>({
            ...currentForm,
            phone: phoneValue,
        }))
    }

    const handleCreateCandidate = async() => {
        const validationErrors = validateForm(formCreateCandidate, rulesCreateCandidateField);
        if (Object.keys(validationErrors).length>0){
            setErrors(validationErrors);
            setTouched(
                Object.keys(
                    formCreateCandidate
                ).reduce((result,field)=>({
                    ...result,
                    [field]: true,
                }), {} )
            );
            return;
        }

        try {
            const candidate = await submitCandidate(formCreateCandidate);
            addToast({
                title: t('toast:success'),
                message: t('toast:createdCandidate'),
                variant: TOAST_VARIANTS.SUCCESS,
            })
            onCreated?.(candidate);
            onCloseCreateCandidate();
            navigate(`/candidates/${candidate.id}`);
        } catch(error){
            const backendErrors = error.response?.data.errors;
            if (backendErrors){
                setErrors(backendErrors);
                setTouched(Object.keys(
                    backendErrors
                ).reduce(
                    (result,field)=>({
                        ...result,
                        [field]:true,
                    }), {}
                ))
            }
            addToast({
                title: t('toast:error'),
                message: t('toast:messageError'),
                variant: TOAST_VARIANTS.ERROR,
            })
        }
    }
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
                        onChange={handleChangeInput('gender')}
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
                        onChange={handlePhoneChange}
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
                    {/* <Input
                        label={t('candidate:region')}
                        value={formCreateCandidate?.region}
                        className='modal create-region'
                    /> */}
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
                        onClick={handleCreateCandidate}
                    />
                </div>
            </div>

        </div>
    )
}