import './ProfileTab.css';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

import Input from '../../../../../common/Input/Input';
import hasChanges from '../../../../../../utils/Modal/hasChanges';

export default function ProfileTab({
    user
}){
    const {t} = useTranslation();
    const [initialData, setInitialData] = useState(null);
    const [dataFormUser, setDataFormUser] = useState(null);
    useEffect(()=>{
        const data = {
            fullName: user.fullName,
            userName: user.username,
            phoneNumber: user.phoneNumber,
            email: user.email,
            role: user.role,
        };
        setInitialData(data);
        setDataFormUser(data)
    },[user])
    const isDirty = hasChanges(initialData, dataFormUser);
    const handleChangeInput = (field) => (e) => {
        setDataFormUser(prev => ({
            ...prev,
            [field]: e.target.value
        }))
    }
    return(
        <div className='profile-tab-user-card'>
            <Input
                value={dataFormUser?.fullName}
                label={t('candidate:fullname')}
                onChange={handleChangeInput('fullName')}
            />

        </div>
    )
}