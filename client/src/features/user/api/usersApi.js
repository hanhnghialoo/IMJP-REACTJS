import { fakeUsers } from "../data/fakeUsers";
import { calculateUserStatistics } from "../service/userStatistics";

export async function getUsers({
    page = 1,
    pageSize = 8
}){
    const start = (page-1)*pageSize;
    const end = start + pageSize;
    const users = fakeUsers.slice(start,end);
    return{
        users,
        pagination: {
            page,
            pageSize,
            totalItem: fakeUsers.length,
            totalPage: Math.ceil(
                fakeUsers.length/pageSize
            ),
            hasNextPage: end < fakeUsers.length,
            hasPreviousPage: page > 1,
        }
    };
}

export async function getUsersById(id){
    return fakeUsers.find(
        user => String(user.id) === String(id)
    )
}

export async function getUserStatistics(){
    return calculateUserStatistics(fakeUsers);
}