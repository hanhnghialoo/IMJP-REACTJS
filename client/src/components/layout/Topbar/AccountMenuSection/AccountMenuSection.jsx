import './AccountMenuSection.css';

import DropdownMenu from '../../../common/DropdownMenu/DropdownMenu';

import { useTranslation } from 'react-i18next';
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { IoLogOut } from "react-icons/io5";

function AccountMenuSection(){
    const {t} = useTranslation(['userMenu', 'auth']);
    const userOptions = [
        {
            label:t('userMenu:profile'),
            icon: <CgProfile/>,
            className: 'btn-account-menu'
        },
        {
            label:t('userMenu:changePassword'),
            icon: <RiLockPasswordLine/>,
            className: 'btn-account-menu'
        },
        {
            label:t('auth:logout'),
            icon: <IoLogOut/>,
            className: 'btn-account-menu'
        },
    ];

    return(
        <div className='account-menu-section'>
            <DropdownMenu
                trigger={ (isOpen) => (
                    <button className={`btn-trigger ${isOpen ? 'open' : ''}`}>
                        <BiSolidDownArrow/>
                    </button>
                )}
                options={userOptions}
                />
        </div>
    )
}

export default AccountMenuSection;