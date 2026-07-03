import './ManagerUsers.css';

import { useUsersStatistics } from '../../hook/useUsersStatistics';
import { useTranslation } from 'react-i18next';
import { ROLES } from '../../../auth/constants/role';
import { IoMdBriefcase } from "react-icons/io";

export default function ManagerUsers(){
    const {t} = useTranslation();
    const {statistics} = useUsersStatistics();
    return(
        <div className='total-user-card'>
            <div className='total-manager-card-icon'>
                <IoMdBriefcase/>
            </div>
            <div className='total-user-card-content'>
                <span>{t('user:totalManager')}</span>
                <span className='total-user-card-number'>{statistics?.roles?.[ROLES.MANAGER]}</span>
            </div>
        </div>
    )
}