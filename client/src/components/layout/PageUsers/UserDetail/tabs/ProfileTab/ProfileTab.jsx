import './ProfileTab.css';

import { useTranslation } from 'react-i18next';
import { useState, useEffect, useMemo } from 'react';

import Input from '../../../../../common/Input/Input';
import Button from '../../../../../common/Button/Button';
import hasChanges from '../../../../../../utils/Modal/hasChanges';
import { formatPhoneNumber } from '../../../../../../utils/formatPhoneNumber';

import { FaUser } from "react-icons/fa";
import { HiAtSymbol } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import Checkbox from '../../../../../common/Checkbox/Checkbox';
import { validateField } from '../../../../../../utils/Validation/validateField';
import { profileTabRulesField } from './ProfileTabRulesField';
import { validateForm } from '../../../../../../utils/Validation/validateForm';

export default function ProfileTab({
    user
}){
    const {t} = useTranslation();
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [initialData, setInitialData] = useState(null);
    const [dataFormUser, setDataFormUser] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    useEffect(()=>{
        const data = {
            fullName: user.fullName,
            username: user.username,
            phoneNumber: user.phoneNumber,
            email: user.email,
            role: user.role,
        };
        setInitialData(data);
        setDataFormUser(data)
    },[user])
    const isDirty = hasChanges(initialData, dataFormUser);
    const handleChangeInput = (field) => (e) => {
        const value = e.target.value;
        setDataFormUser(prev => ({
            ...prev,
            [field]: value
        }))
        const error = validateField(field, value, profileTabRulesField);
        setErrors(prev => ({
            ...prev,
            [field]: error
        }))
    }
    const handleBlur = (field) => () =>{
        const error = validateField(
            field,
            dataFormUser[field],
            profileTabRulesField
        );
        setTouched(prev => ({
            ...prev,
            [field]: true
        }));
        setErrors(prev=> ({
            ...prev,
            [field]: error
        }));
    } 
    const isFormValid = useMemo(()=>{
        if (!dataFormUser) return false;
        return Object.keys(
            validateForm(dataFormUser, profileTabRulesField)
        ).length === 0;
    },[dataFormUser])

    const handleResetForm =() =>{
        setDataFormUser({
            fullName: user.fullName,
            username: user.username,
            phoneNumber: user.phoneNumber,
            email: user.email,
            role: user.role,
        })
        setInitialData({
            fullName: user.fullName,
            username: user.username,
            phoneNumber: user.phoneNumber,
            email: user.email,
            role: user.role,
        })
        setErrors({});
        setTouched({});
        setIsChecked(false);
    }
    return(
        <>
        <div className='profile-tab-user-card'>
            <Input
                value={dataFormUser?.fullName}
                label={t('candidate:fullname')}
                startIcon={<FaUser/>}
                variant='primary'
                onChange={handleChangeInput('fullName')}
                className='profile-user'
                onBlur={handleBlur('fullName')}
                error={touched.fullName && `${t(`validate:${errors.fullName}`)}`}
            />
            <Input
                value={dataFormUser?.username}
                label={t('userMenu:userName')}
                disabled
                startIcon={<HiAtSymbol/>}
                variant='primary'
                className='profile-user'
            />
             <Input
                value={formatPhoneNumber(dataFormUser?.phoneNumber)}
                label={t('userMenu:phoneNumber')}
                startIcon={<FaPhoneAlt/>}
                variant='primary'
                onChange={handleChangeInput('phoneNumber')}
                className='profile-user'
            />
              <Input
                value={dataFormUser?.email}
                label={t('userMenu:email')}
                startIcon={<MdEmail/>}
                variant='primary'
                onChange={handleChangeInput('email')}
                className='profile-user'
                onBlur={handleBlur('email')}
                error={touched.email && `${t(`validate:${errors.email}`)}`}
            />
               <Input
                value={dataFormUser?.role}
                label={t('userMenu:userRole')}
                startIcon={<MdAdminPanelSettings/>}
                variant='primary'
                disabled
                className='profile-user'
            />
            <Checkbox
                checked={isChecked}
                label={t('user:confirmEdit')}
                className='check-confirm-edit'
                onChange={()=>setIsChecked(!isChecked)}
            />

        </div>
            <div className='profile-tab-user-bottom'>
                <Button
                    label={t('search:reset')}
                    variant='danger'
                    icon={<GrPowerReset/>}
                    className='cancel-edit'
                    onClick={handleResetForm}
                />
                <Button
                    label={t('common:save')}
                    variant='primary'
                    disabled={!(isDirty && isChecked && isFormValid)}
                    className='save-edit'
                />
            </div>
        </>
    )
}