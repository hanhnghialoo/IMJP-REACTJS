import './UserHeader.css';
import { useTranslation } from 'react-i18next';

export default function UserHeader(){
    const {t} = useTranslation();
    return(
        <div className='user-header'>
            <div className='user-header-title no'>
                #
            </div>
            <div className='user-header-title full-name'>
                {t('userMenu:fullName')}
            </div>
            <div className='user-header-title role'>
                {t('userMenu:userRole')}
            </div>
            <div className='user-header-title email'>
                {t('userMenu:email')}
            </div>
            {/* <div className='user-header-title phone-number'>
                {t('userMenu:phoneNumber')}
            </div> */}
            <div className='user-header-title status'>
                {t('user:status')}
            </div>
            <div className='user-header-title last-active'>
                {t('user:lastActive')}
            </div>
        </div>
    )
}