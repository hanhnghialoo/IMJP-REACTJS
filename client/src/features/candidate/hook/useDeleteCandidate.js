import { useState } from "react";
import { deleteCandidateById } from "../api/candidateApi";

export default function useDeleteCandidate(){
    const [isDeleting, setIsDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState(null);

    async function deleteCandidate(id){
        if (!id){
            throw new Error('Candidate ID is repuired');
        }
        try {
            setIsDeleting(true);
            setDeleteError(null);
            const response = await deleteCandidateById(id);
            return response.candidate;
        } catch(error){
            const normalizedError = {
                message:
                    error.response?.data.message || error.message || 'Unable to delete candidate',
                detail:
                    error.reponse?.data.details || null,
            };

            setDeleteError(normalizedError);
            throw error;
        } finally {
            setIsDeleting(false);
        }
    }

    return{
        isDeleting,
        deleteError,
        deleteCandidate,
    };
}