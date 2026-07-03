import { IoHome, IoSearchSharp } from "react-icons/io5";
import { MdInsertChart } from "react-icons/md";
import { FaUser } from "react-icons/fa";


export const navigationConfig = [
    {
        key: 'home',
        labelKey: 'nav:home',
        path:'/candidates',
        icon: IoHome,
        roles: ['user', 'manager', 'admin'],
    },
    {
        key: 'report',
        labelKey: 'nav:report',
        path:'/report',
        icon: MdInsertChart,
        roles: ['user', 'manager', 'admin'],
    },
    {
        key: 'userList',
        labelKey: 'nav:userList',
        path:'/user',
        icon: FaUser,
        roles: ['admin'],
    },
];

