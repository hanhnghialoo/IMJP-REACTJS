import './UserRow.css';
import { formatPhoneNumber } from '../../../../../utils/formatPhoneNumber';

import { FaUser } from "react-icons/fa";
import { IoMdBriefcase } from "react-icons/io";
import { IoShieldCheckmark } from "react-icons/io5";
import { getUserStatus } from '../../../../../utils/statusUsers/getUserStatus';
import { useTranslation } from 'react-i18next';

import { GoDotFill } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";

export default function UserRow({
    user,
    no,
    onClick
}){
    const {t} = useTranslation();
    const activity = getUserStatus(user.lastActivityAt)
    return(
        <div className='user-row-group'
            onClick={onClick}
        >

            <div className='user-row no'>
                {no}
            </div>

            <div className='user-row info'>
                <div className='user-row full-name'>
                    {user.fullName}
                </div>
                <div className='user-row detail'>
                    <div className='user-row user-name'>
                        {user.username}
                    </div>
                    <div className='user-row space'>{'/'}</div>
                    <div className='user-row phone-number'>
                        <FaPhoneAlt className='user-row-icon-phone'/>{formatPhoneNumber(user.phoneNumber)}
                    </div>
                </div>
            </div>

            <div className='user-row-role'>
                { user.role === "admin" 
                    ? (
                        <div className='user-row-role admin'>
                             <IoShieldCheckmark/>{user.role}
                        </div>
                    )
                    : user.role === 'manager'
                        ? (
                            <div className='user-row-role manager'>
                                 <IoMdBriefcase/>{user.role}
                            </div>
                        )
                        :(
                            <div className='user-row-role user'>
                                <FaUser/>{user.role}
                            </div>
                        )
                }
            </div>

            <div className='user-row email'>
                {user.email}
            </div>

            <div className={`user-row status ${activity.status}`}>
                <GoDotFill/> {t(`user:${activity.status}`)}
            </div>
            
            <div className='user-row last-active'>
                {activity.time} {t(`user:${activity.text}`)}
            </div>

        </div>
    )
}