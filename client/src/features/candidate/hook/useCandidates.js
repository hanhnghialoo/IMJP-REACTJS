import { useEffect, useState, useCallback } from "react";
import { getCandidates, getCandidateById } from "../api/candidateApi";

export  function useCandidates(){
    const [candidates, setCandidates] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [candidate, setCandidate] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    

    const loadCandidates = useCallback(
    async (
        page = 1,
        pageSize = 5,
        search ='',
    ) => {
        try {
            setLoading(true);
            setError(null);
            const response = await getCandidates({
                page,
                pageSize,
                search,
            });
    
            setCandidates(response?.candidates ?? []);
            setPagination(response?.pagination ?? null);
        } catch(error){
            console.error(error);
            setError(error);
            
        } finally {
            setLoading(false);
        }

    },[]
);

    const loadCandidateById = async (id) => {
        try{
            setLoading(true);
            setError(null);
            const candidateData = 
                await getCandidateById(id);
                setCandidate(candidateData);
        } catch(error){
            console.error(error);
            setError(error);
        } finally{
            setLoading(false);
        }
    }

    // useEffect(()=> {
    //     loadCandidates();
    // }, []);

    return {
        candidates,
        candidate,
        pagination,
        loading,
        error,
        loadCandidates,
        loadCandidateById
    };
}