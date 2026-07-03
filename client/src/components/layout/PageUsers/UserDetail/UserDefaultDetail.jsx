import './UserDetail.css';
import { useTranslation } from 'react-i18next';
import { BsPersonVcard } from "react-icons/bs";


export default function UserDefaultDetail(){
    const {t} = useTranslation();
    return(
        <div className='content-user-detail-default'>
            <BsPersonVcard
                className='icon-user-detail-default'
            />
            <div className='user-default-title'>
                {t('user:noUserSelected')}
            </div>
            <div className='user-default-caption'>
                {t('user:userCaption')}
            </div>
        </div>
    )
}