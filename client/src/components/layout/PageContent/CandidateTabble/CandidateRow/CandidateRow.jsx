import './CandidateRow.css';


import CandidateInfoCell from './CandidateInfoCell/CandidateInfoCell';
import CandidateContact from './CandidateContactCell/CandidateContact';
import CandidateConsultation from './CandidateConsultationCell/CandidateConsultation';
import CandidateSource from './CandidateSourceCell/CandidateSource';
import CandidateExamBatch from './CandidateExamBatchCell/CandidateExamBatch';
import CandidateEligibility from './CandidateEligibilityCell/CandidateEligibility';
import CandidateDocument from './CandidateDocumentCell/CandidateDocument';
import CandidateResult from '../CandidateResultCell/CandidateResult';
import CandidateStatus from './CandidateStatusCell/CandidateStatus';
import { useNavigate } from 'react-router-dom';
import { CandidateTimeline } from './CandidateTimeline/CandidateTimeline';

function CandidateRow({
    candidate,
    onExpand,
    isExpanded,
    isExpandedRow,
    no
}){
    const navigate = useNavigate();
    const handleClick=()=> {
        navigate(`/candidates/${candidate.id}`)
    }
    return(
        <div className={isExpandedRow?'candidate-row expanded':'candidate-row'}>
            <div className='candidate-no'>{no}</div>
            <CandidateInfoCell
                candidate={candidate}
                onClick={()=>handleClick()}
            />
            <CandidateContact
                candidate={candidate}
                onExpand={onExpand}
                isExpanded={isExpanded(
                    candidate.id,
                    'contact'
                )}
            />
            <CandidateConsultation
                candidate={candidate}
                onExpand={onExpand}
                isExpanded={isExpanded(
                    candidate.id,
                    'consultation'
                )}
            />
            <CandidateSource
                candidate={candidate}
            />
            <CandidateExamBatch
                candidate={candidate}
            />
            {/* <CandidateEligibility
                candidate={candidate}
                onExpand={onExpand}
                isExpanded={isExpanded(
                    candidate.id,
                    'eligibility'
                )}
            /> */}

            <CandidateTimeline
                candidate={candidate}
                onClick={()=>handleClick()}
                onExpand={onExpand}
                isExpanded={isExpanded}
            />
            {/* <CandidateDocument
                candidate={candidate}
                onExpand={onExpand}
                isExpanded={isExpanded(
                    candidate.id,
                    'document'
                )}
            />
            <CandidateStatus
                candidate={candidate}
                onExpand={onExpand}
                isExpanded={isExpanded(
                    candidate.id,
                    'status'
                )}
            /> */}
{/* 
            {candidate.timeline?.currentStep === 'consulting'
                ?   <CandidateEligibility
                        candidate={candidate}
                        onExpand={onExpand}
                        isExpanded={isExpanded(
                            candidate.id,
                            'eligibility'
                        )}
                    />
                : candidate.timeline?.currentStep === 'profile'
                    ?   <CandidateStatus
                            candidate={candidate}
                            onExpand={onExpand}
                            isExpanded={isExpanded(
                            candidate.id,
                            'status'
                        )}
                />
                    :  <CandidateResult
                            candidate={candidate}
                            onExpand={onExpand}
                            isExpanded={isExpanded(
                            candidate.id,
                            'result'
                            )}
                        />
            } */}
            

        </div>
    )
}

export default CandidateRow;