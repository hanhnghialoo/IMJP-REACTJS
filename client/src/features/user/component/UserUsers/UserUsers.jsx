import './UserUsers.css';

import { useUsersStatistics } from '../../hook/useUsersStatistics';
import { useTranslation } from 'react-i18next';
import { ROLES } from '../../../auth/constants/role';
import { FaUser } from "react-icons/fa";

export default function UserUsers(){
    const {t} = useTranslation();
    const {statistics} = useUsersStatistics();
    return(
        <div className='total-user-card'>
            <div className='total-users-card-icon'>
                <FaUser/>
            </div>
            <div className='total-user-card-content'>
                <span>{t('user:totalUser')}</span>
                <span className='total-user-card-number'>{statistics?.roles?.[ROLES.USER]}</span>
            </div>
        </div>
    )
}