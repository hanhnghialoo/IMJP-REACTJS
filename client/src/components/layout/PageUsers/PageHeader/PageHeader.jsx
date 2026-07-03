import './PageHeader.css';
import { useTranslation } from 'react-i18next';

export default function PageHeader(){
    const {t} = useTranslation();
    return(
        <div className='content-title'>
            {t('userMenu:userList')}
        </div>
    )
}