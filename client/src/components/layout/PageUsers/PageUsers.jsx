import './PageUsers.css';

import PageHeader from './PageHeader/PageHeader';
import UserToolbar from './UserToolbar/UserToolbar';
import UserHeader from './UserTable/UserHeader/UserHeader';
import UserRow from './UserTable/UserRow/UserRow';
import UserPagination from './Pagination/UserPagination';
import TotalUsers from '../../../features/user/component/TotalUsers/TotalUsers';
import AdminUsers from '../../../features/user/component/AdminUsers/AdminUsers';
import ManagerUsers from '../../../features/user/component/ManagerUsers/ManagerUsers';
import UserUsers from '../../../features/user/component/UserUsers/UserUsers';
import OnlineUsers from '../../../features/user/component/OnlineUsers/OnlineUsers';

import CreateUserModal from '../../../features/candidate/modal/CreateUserModal/CreateUserModal';
import { useState, useEffect, useRef } from 'react';

import { useUsers } from '../../../features/user/hook/useUsers';
import { Fragment } from 'react';
import UserDetail from './UserDetail/UserDetail';

export default function PageUsers(){
    const {
        users,
        pagination,
        loadUsers
    } = useUsers();
    const [isOpenCreateUserModal, setIsOpenCreateUserModal]=useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const inputNameRef = useRef(null);

    useEffect(()=>{
        const handleKeyDown = (event) => {
            if(event.key==='Escape'){
                setIsOpenCreateUserModal(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(()=>{
        inputNameRef.current?.focus();
    }, [isOpenCreateUserModal])

    return(
        <div className='page-body-user'>
            <div className='page-body-user-left'>
                <div className='page-user-dashboard'>
                    <TotalUsers/>
                    <AdminUsers/>
                    <ManagerUsers/>
                    <UserUsers/>
                    <OnlineUsers/>
                </div>

                <div className='page-user-content'>
                    <div className='page-user-header'>
                        <PageHeader/>
                        <UserToolbar
                            onCreateUserModal={()=>setIsOpenCreateUserModal(true)}
                        />
                    </div>
                    <div className='user-table'>
                        <UserHeader/>
                        <div className='user-divider'/>
                        {users.map((user, index) => (
                            <Fragment key={user.id}
                            >
                                <UserRow
                                    user={user}
                                    no={(pagination.page-1)*pagination.pageSize+index+1}
                                    onClick={()=>setSelectedUser(user)}
                                    selectedUser={selectedUser}
                                />
                            </Fragment>
                        ))}
                    </div>

                    <UserPagination
                        users={users}
                        pagination={pagination}
                        onPageChange={loadUsers}
                    />
                </div>
            </div>

            <div className='page-body-user-right'>
                <UserDetail
                    user={selectedUser}
                    setSelectedUser={selectedUser}
                />
            </div>

            {isOpenCreateUserModal && 
                <CreateUserModal
                    onCloseCreateUserModal={()=>setIsOpenCreateUserModal(false)}
                    inputNameRef={inputNameRef}
                />
            }

        </div>
    )
}