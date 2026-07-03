import { useEffect, useState } from "react";
import { getCandidates, getCandidateById } from "../api/candidateApi";

export  function useCandidates(){
    const [candidates, setCandidates] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [candidate, setCandidate] = useState(null);
    

    const loadCandidates = async (
        page = 1,
        pageSize = 5
    ) => {
        const response = await getCandidates({
            page,
            pageSize
        });

        setCandidates(response.candidates);
        setPagination(response.pagination);

    }

    const loadCandidateById = async (id) => {
        const candidateData = 
            await getCandidateById(id);
            setCandidate(candidateData);
    }

    useEffect(()=> {
        loadCandidates();
    }, []);

    return {
        candidates,
        candidate,
        pagination,
        loadCandidates,
        loadCandidateById
    };
}