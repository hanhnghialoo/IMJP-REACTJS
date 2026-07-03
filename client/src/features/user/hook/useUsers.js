import { useState, useEffect } from "react"
import { getUsers, getUsersById } from "../api/usersApi";

export function useUsers(){
    const [users, setUsers] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [user, setUser] = useState(null);

    const loadUsers = async (
        page = 1,
        pageSize = 5
    ) => {
        const response = await getUsers(
            page,
            pageSize
        );

        setUsers(response.users);
        setPagination(response.pagination);
    }
    const loadUserById = async (id) => {
        const UserData = await getUsersById(id);
        setUser(UserData);
    }
    useEffect(()=>{
        loadUsers();
    },[]);

    return{
        users,
        user,
        pagination,
        loadUsers,
        loadUserById,
    };
}