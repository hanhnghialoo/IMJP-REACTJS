import './UserDetailTabs.css';

import ProfileTab from '../tabs/ProfileTab/ProfileTab';
import { useTranslation } from 'react-i18next';

export default function UserDetailTabs({
    activeTab,
    onChangeTab,
    user
}){
    const {t} = useTranslation();
    const USER_DETAIL_TABS = [
        {
            value: 'profile',
            labelKey: 'user:profile'
        },
        {
            value: 'account',
            labelKey: 'user:account'
        },
        {
            value: 'security',
            labelKey: 'user:security'
        },
        {
            value: 'activity',
            labelKey: 'user:activity'
        },
    ];
    return (
        <div className='user-detail-tabs-card'>
            <div className='user-detail-tabs-box'>
                {USER_DETAIL_TABS.map((tab) => (
                    <button
                        key={tab.value}
                        className={`user-detail-tab ${activeTab===tab.value ? 'active': ''}`}
                        onClick={()=>onChangeTab(tab.value)}
                    >
                        {t(tab.labelKey)}
                    </button>
                ))}
            </div>

            <div className='user-detail-tab-content'>
                {activeTab === 'profile' &&
                    <ProfileTab
                        user={user}
                    />
                }
            </div>
        </div>
    )
}

