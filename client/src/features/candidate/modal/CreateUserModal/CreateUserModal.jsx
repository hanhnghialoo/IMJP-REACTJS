import './CreateUserModal.css';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useMemo } from 'react';
import { ROLES } from '../../../auth/constants/role';

import { IoCreate } from "react-icons/io5";
import { FaRegCircleXmark } from "react-icons/fa6";
import Button from '../../../../components/common/Button/Button';
import Input from '../../../../components/common/Input/Input';

import { FaUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { formatPhoneNumber } from '../../../../utils/formatPhoneNumber';
import { FaClipboardUser } from "react-icons/fa6";
import { HiUserAdd } from "react-icons/hi";

import { validateField } from '../../../../utils/Validation/validateField';
import { validateForm } from '../../../../utils/Validation/validateForm';
import { rulesCreateUserField } from './createUserRulesField';


export default function CreateUserModal({
    onCloseCreateUserModal,
    inputNameRef
}){
    const {t} = useTranslation();
    const [ errors, setErrors] = useState({});
    const [ touched, setTouched] = useState({});
    const [ formCreateUser, setFormCreateUser] = useState({
        fullName:'',
        username:'',
        email:'',
        phoneNumber:'',
        role: ROLES.USER,
    });
    const handleChangeInput = (field) => (e) => {
        const value = e.target.value;
        setFormCreateUser(prev=>({
            ...prev,
            [field]: value
        }))
        const error = validateField(field, value, rulesCreateUserField);
        setErrors(prev => ({
            ...prev,
            [field]: error
        }));
    }
    const handleBlur = (field) => () => {
        const error = validateField(
            field,
            formCreateUser[field],
            rulesCreateUserField
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
            validateForm(formCreateUser,rulesCreateUserField)
        ).length === 0;
    },[formCreateUser])

    return(
        <div className='modal-create-card'>
            <div className='modal-create-content'>

                <div className='modal-create-header'>
                    <div className='modal-create-title'>
                        <IoCreate/>
                        {t('user:addUser')}
                    </div>
                    <Button
                        icon={<FaRegCircleXmark/>}
                        className='btn-close-modal-create'
                        onClick={onCloseCreateUserModal}
                    />
                </div>
            
                <div className='modal-create-divider'></div>

                <div className='modal-create-middle'>
                    <Input
                        ref={inputNameRef}
                        label={t('candidate:fullname')}
                        value={formCreateUser?.fullName}
                        placeholder={t('Nguyen Van A')}
                        className='modal create-full-name'
                        endIcon={<FaUser/>}
                        variant='primary'
                        onChange={handleChangeInput('fullName')}
                        error={touched.fullName && `${t(`validate:${errors.fullName}`)}`}
                        onBlur={handleBlur('fullName')}
                    />
                    <Input
                        label={t('candidate:email')}
                        value={formCreateUser?.email}
                        className='modal create-email'
                        endIcon={<MdOutlineMail/>}
                        variant='primary'
                        onChange={handleChangeInput('email')}
                        error={touched.email && `${t(`validate:${errors.email}`)}`}
                        onBlur={handleBlur('email')}
                    />
                    <Input
                        label={t('candidate:phoneNumber')}
                        value={formatPhoneNumber(formCreateUser?.phoneNumber)}
                        className='modal create-phone-number'
                        endIcon={<MdOutlinePhoneIphone/>}
                        variant='primary'
                        onChange={handleChangeInput('phoneNumber')}
                    />
                    <Input
                        label={t('auth:username')}
                        value={formCreateUser?.username}
                        className='modal create-username'
                        endIcon={<FaClipboardUser/>}
                        variant='primary'
                        onChange={handleChangeInput('username')}
                        error={touched.username && `${t(`validate:${errors.username}`)}`}
                        onBlur={handleBlur('username')}
                    />
                </div>

                <div className='modal-create-bottom'>
                    <Button
                        label={t('common:cancel')}
                        variant='danger'
                        className='cancel-create-modal'
                        onClick={onCloseCreateUserModal}
                    />
                    <Button
                        label={t('common:create')}
                        variant='primary'
                        icon={<HiUserAdd/>}
                        className='save-create-modal'
                        disabled={!isFormValid}
                    />
                </div>

            </div>

        </div>
    )
}