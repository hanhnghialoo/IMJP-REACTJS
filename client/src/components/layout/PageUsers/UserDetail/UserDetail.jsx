import './UserDetail.css';

import UserControl from './Section/UserControl/UserControl';
import UserDefaultDetail from './UserDefaultDetail';
import { useTranslation } from 'react-i18next';

export default function UserDetail({
    user
}){
    const {t} = useTranslation();
    return(
        <>
            {user 
                ?
                    <div className='page-user-detail'>
                        <div className='page-user-control-header'>
                            <div>{t('user:userControl')}:</div>
                            <div className='user-detail-fullName'>{user.fullName}</div>
                        </div>
                        <div className='page-user-divider'></div>
                        <UserControl/>
                    </div>
                : <UserDefaultDetail/>
            }
        </>
        
    )
}