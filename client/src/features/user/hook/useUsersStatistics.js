import { useEffect, useState } from "react";
import { getUserStatistics } from "../api/usersApi";

export function useUsersStatistics(){
    const [statistics, setStatistics] = useState(null);
    const loadStatistics = async () =>{
        const data = await getUserStatistics();

        setStatistics(data);
    };

    useEffect(()=>{
        loadStatistics();

    },[]);

    return{
        statistics,
        loadStatistics
    };
}