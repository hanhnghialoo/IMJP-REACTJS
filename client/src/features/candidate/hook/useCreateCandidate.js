import { useState } from "react";
import { createCandidate } from "../api/candidateApi";

export function useCreateCandidate(){
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const submitCandidate = async (
        candidateData
    ) => {
        try {
            setIsSubmitting(true);
            setSubmitError('');

            const response = await createCandidate(candidateData);

            return response.candidate;
        } catch(error){
            const responseData = error.response?.data;
            setSubmitError(responseData?.message || 'Cannot create candidate');

            throw error;
        } finally {
            setIsSubmitting(false);
        };

    };
    
    return {
        isSubmitting,
        submitError,
        submitCandidate,
        clearSubmitError: () => setSubmitError(''),
    };
}
