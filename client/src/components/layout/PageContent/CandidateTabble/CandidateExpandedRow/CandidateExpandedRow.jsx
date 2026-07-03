import './CandidateExpandedRow.css';

import {useRef, useEffect} from 'react';

import { EXPANDED_ROW_COMPONENTS } from './CandidateExpandedRow.configs';


function CandidateExpandedRow({
    candidate,
    field
}){
    const rowRef = useRef(null)
    const Component = EXPANDED_ROW_COMPONENTS[field];
    useEffect(()=>{
        if (rowRef.current){
            rowRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    },[]);

    if (!Component){
        return null;
    }
    return(
        <div 
            ref={rowRef}   
            className='candidate-expanded-row'>
                <Component
                    candidate={candidate}
                />
        </div>

    )
}

export default CandidateExpandedRow;