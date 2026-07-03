import './TotalUsers.css';
import { useUsersStatistics } from '../../hook/useUsersStatistics';
import { useTranslation } from 'react-i18next';
import { ROLES } from '../../../auth/constants/role';

import { FaUserGroup } from "react-icons/fa6";

export default function TotalUsers(){
    const {t} = useTranslation();
    const {statistics} = useUsersStatistics();
    return(
        <div className='total-user-card'>
            <div className='total-user-card-icon'>
                <FaUserGroup/>
            </div>
            <div className='total-user-card-content'>
                <span>{t('user:totalUsers')}</span>
                <span className='total-user-card-number'>{statistics?.total}</span>
            </div>
        </div>
    )
}