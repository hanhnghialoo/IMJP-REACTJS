import { ROLES } from "../../auth/constants/role";

export function calculateUserStatistics(users){
    const now = Date.now();
    return users.reduce(
        (acc,user)=>{
            acc.total++;
            acc.roles[user.role] = (acc.roles[user.role]||0) + 1;

            const lastActivity = user.lastActivityAt
                ? new Date(user.lastActivityAt).getTime()
                : 0;

            const minutes = (Date.now()-lastActivity)/60000;
            if (minutes<5){
                acc.online++
            } else if(minutes<10){
                acc.recent++;
            } else if(minutes<60){
                acc.away++;
            } else {
                acc.offline++;
            }

            return acc;
        },
        {
            total: 0,
            online: 0,
            recent: 0,
            away: 0,
            offline: 0,
            roles: {
                admin: 0,
                manager: 0,
                user: 0,
            },
        }
    )
}