import './UsersPage.css';

import TopBar from '../../components/layout/Topbar/Topbar';
import PageUsers from '../../components/layout/PageUsers/PageUsers';

export default function UsersPage (){
    return (
        <div className='users-page'>
            <TopBar/>
            <PageUsers/>
        </div>
    );
}