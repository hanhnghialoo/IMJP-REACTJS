import './UserSection.css'

import AvatarUser from './AvatarUserSection/AvatarUser';
import NameSection from './NameSection/NameSection';
import MailSection from './MailSection/MailSection';
import { useAuth } from '../../../../features/auth/hook/useAuth';

function UserSection(){
    const {user} = useAuth();
    return(
        <div className='user-section'>
            <AvatarUser
                user ={user}
            />
            <div className='text-user-section'>
                <NameSection
                    user={user}
                />
                <MailSection
                    user={user}
                />
            </div>
        </div>
    )
}
export default UserSection;