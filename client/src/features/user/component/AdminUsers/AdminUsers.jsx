import './AdminUsers.css';

import { useUsersStatistics } from '../../hook/useUsersStatistics';
import { useTranslation } from 'react-i18next';
import { ROLES } from '../../../auth/constants/role';
import { IoShieldCheckmark } from "react-icons/io5";

export default function AdminUsers(){
    const {t} = useTranslation();
    const {statistics} = useUsersStatistics();
    return(
        <div className='total-user-card'>
            <div className='total-admin-card-icon'>
                <IoShieldCheckmark/>
            </div>
            <div className='total-user-card-content'>
                <span>{t('user:totalAdmin')}</span>
                <span className='total-user-card-number'>{statistics?.roles?.[ROLES.ADMIN]}</span>
            </div>
        </div>
    )
}