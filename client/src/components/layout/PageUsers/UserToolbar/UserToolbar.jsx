import './UserToolbar.css';

import Button from '../../../common/Button/Button';
import Input from '../../../common/Input/Input';
import { useTranslation } from 'react-i18next';

import { IoCreateSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

function UserToolbar({
    onCreateUserModal,
}){
    const {t} = useTranslation();
    return(
        <div className='user-toolbar-content'>
            <Input
                placeholder={t('user:searchBy')}
                startIcon={<CiSearch/>}
                className='user-toolbar-search'
            />
            <Button
                label={t('userMenu:addUser')}
                icon={<IoCreateSharp/>}
                className='btn-add-new-user'
                variant='primary'
                onClick={onCreateUserModal}
            />
        </div>
    )
}

export default UserToolbar;