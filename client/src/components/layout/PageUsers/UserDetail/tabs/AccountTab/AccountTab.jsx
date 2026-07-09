import './AccountTab.css';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import {formatDate} from '../../../../../../utils/formatDate';

export default function AccountTab({
    user
}){
    const {t} = useTranslation();
    return(
        <div className='account-tab-user-card'>
            <div className='account-tab-info'>
                <span className='account-tab-title'>{t('userMenu:userName')}</span>
                <span>:</span>
                <span className='account-tab-value'>{user.username}</span>
            </div>
            <div className='account-tab-info'>
                <span className='account-tab-title'>{t('userMenu:userRole')}</span>
                <span>:</span>
                <span className='account-tab-value'>{user.role}</span>
            </div>
            <div className='account-tab-info'>
                <span className='account-tab-title'>{t('user:createdDate')}</span>
                <span>:</span>
                <span className='account-tab-value-normal'>{formatDate(user?.createdAt)}</span>
            </div>
            <div className='account-tab-info-status'>
                <span className='account-tab-title'>{t('user:statusAccount')}</span>
                <span>:</span>
                {user?.isLocked === 'false'
                    ? <span className='account-tab-value-status active'>{t('user:active')}</span>
                    : <span className='account-tab-value-status locked'>{t('user:locked')}</span>
                }
            </div>
            <div className='account-tab-info'>
                <span className='account-tab-title'>{t('user:lastActivity')}</span>
                <span>:</span>
                <span className='account-tab-value-normal'>{formatDate(user?.lastActivityAt)}</span>
            </div>

            <div className='account-tab-caption'>
                {t('user:accountCaption')}
            </div>
        </div>
        
    )
}

