import './UserDetail.css';

import { useTranslation } from 'react-i18next';

import { useState, useEffect } from 'react';
import UserControl from './Section/UserControl/UserControl';
import UserDefaultDetail from './UserDefaultDetail';
import UserDetailTabs from './UserDetailTabs/UserDetailTabs';

export default function UserDetail({
    user
}){
    const {t} = useTranslation();
    const [activeTab, setActiveTab] = useState('profile')
    return(
        <>
            {user 
                ?
                    <div className='page-user-detail'>
                        <div className='page-user-control-header'>
                            <div>{t('user:userControl')}:</div>
                            <div className='user-detail-fullName'>{user.fullName}</div>
                        </div>
                        {/* <div className='page-user-divider'></div> */}
                        {/* <UserControl/> */}
                        <UserDetailTabs
                            activeTab={activeTab}
                            onChangeTab={(e)=>setActiveTab(e)}
                            user={user}
                        />
                    </div>
                : <UserDefaultDetail/>
            }
        </>
        
    )
}