import './OnlineUsers.css';

import { useUsersStatistics } from '../../hook/useUsersStatistics';
import { useTranslation } from 'react-i18next';
import { GoDotFill } from "react-icons/go";


export default function OnlineUsers(){
    const {t} = useTranslation();
    const {statistics} = useUsersStatistics();
    return(
        <div className='total-user-card'>
            <div className='total-online-card-icon'>
                <GoDotFill/>
            </div>
            <div className='total-user-card-content'>
                <span>{t('user:onlineUsers')}</span>
                <span className='total-user-card-number'>{statistics?.online}</span>
            </div>
        </div>
    )
}