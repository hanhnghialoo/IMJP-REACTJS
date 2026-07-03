import { useState } from "react";

export function useCandidateExpandedRow(){
    const [expandedCell, setExpandedCell]= useState(null);

    const toggleExpand = (candidateId, field) => {
        setExpandedCell(prev=> {
            const isCurrent =
            prev?.candidateId === candidateId &&
            prev?.field === field;

            if (isCurrent){
                return null;
            }
            return {
                candidateId,
                field,
            };
        });
    };

    const isExpanded = (candidateId, field)=>{
        return(
            expandedCell?.candidateId === candidateId &&
            expandedCell?.field === field
        );
    }

    const isExpandedRow = (candidateId)=>{
        return expandedCell?.candidateId === candidateId;
    };

    const closeExpandedRow = ()=>{
        setExpandedCell(null);
    };

    return{
        expandedCell,
        toggleExpand,
        isExpanded,
        isExpandedRow,
        closeExpandedRow,

    }

}