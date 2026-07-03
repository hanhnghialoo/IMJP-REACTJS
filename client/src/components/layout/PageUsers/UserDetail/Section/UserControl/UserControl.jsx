import './UserControl.css';
import { useTranslation } from 'react-i18next';
import Button from '../../../../../common/Button/Button';

import { IoKeyOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";



export default function UserControl(){
    const {t} = useTranslation();
    return(
        <div className='user-control-content'>
            <div className='user-control-caption'>
                {t('user:userControlCaption')}
            </div>
            <div className='user-control-action'>
                <Button
                    label={t('user:resetPassword')}
                    icon={<IoKeyOutline/>}
                    className='btn-reset-password-user'
                />
                {/* <Button
                    label={t('user:lockAccount')}
                    icon={<FaLock/>}
                /> */}
                <Button
                    label={t('user:deleteUser')}
                    icon={<IoTrashOutline/>}
                    className='btn-delete-user'
                />
            </div>
        </div>
    )
}