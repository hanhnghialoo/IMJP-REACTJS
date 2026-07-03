import './CandidateTimeline.css';
import React from 'react';

import { buildTimeline } from '../../../../../../features/timeline/utils/buildTimeline';
import { useTranslation } from 'react-i18next';

import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import { FaCircleExclamation } from "react-icons/fa6";
import { FaCircleDot } from "react-icons/fa6";
import CandidateEligibility from '../CandidateEligibilityCell/CandidateEligibility';
import CandidateStatus from '../CandidateStatusCell/CandidateStatus';
import CandidateResult from '../../CandidateResultCell/CandidateResult';

export function CandidateTimeline({
    candidate,
    onClick,
    onExpand,
    isExpanded
}){
    const {t}=useTranslation('candidate','timeline');
    const timeline = buildTimeline(
        candidate?.timeline?.currentStep,
        candidate?.timeline?.status
    )
    const currentStep = candidate?.timeline?.currentStep;
    return(
        <div className='candidate-timeline' /*onClick={onClick}*/>
            
            <div className='candidate-timeline-list'>
                {timeline.map((step,index)=>(
                    <React.Fragment  key={step.id}>
                        <div
                            className={`candidate-timeline-item ${step?.status}`}
                        >
                           <div className={`timeline-result ${step?.label} ${step?.status}`}>
                                {step.id === currentStep && step?.label==='consultation'
                                    ? <CandidateEligibility
                                        candidate={candidate}
                                        onExpand={onExpand}
                                        isExpanded={isExpanded(
                                            candidate.id,
                                            'eligibility'
                                        )}
                                        className={`timeline-eligibility ${step.status}`}
                                    />
                                    : step.id === currentStep && step?.label==='application'
                                        ? <CandidateStatus
                                            candidate={candidate}
                                            onExpand={onExpand}
                                            isExpanded={isExpanded(
                                                candidate.id,
                                                'status'
                                            )}
                                            className={`timeline-document ${step.status}`}
                                        />
                                        : step.id === currentStep && step?.label==='assessment'
                                            ? <CandidateResult
                                                candidate={candidate}
                                                onExpand={onExpand}
                                                isExpanded={isExpanded(
                                                    candidate.id,
                                                    'result'
                                                )}
                                                className={`timeline-exam ${step.status}`}
                                            />
                                            : step.id === currentStep && step?.label==='result'
                                                ? <CandidateResult
                                                    candidate={candidate}
                                                    onExpand={onExpand}
                                                    isExpanded={isExpanded(
                                                        candidate.id,
                                                        'result'
                                                    )}
                                                    className={`timeline-success ${step.status}`}
                                                />
                                                : null
                                }       
                           </div>
                                
                            <div className='timeline-icon'>
                                {step.status === 'complete' && <FaCheckCircle />}
                                {step.status === 'current' && <FaCircleDot/>}
                                {step.status === 'pending' && <FaCircle/>}
                                {step.status === 'rejected' && <FaCircleXmark/>}
                                {step.status === 'warning' && <FaCircleExclamation/>}
                            </div>
                          

                            <span className='timeline-label'>
                                {t(`timeline:${step.label}`)}
                            </span>
                        </div>
                            {index < timeline.length -1 && (
                                <div className={`timeline-line ${step.status}`}>
                                </div>
                            )}

                    </React.Fragment>
                    
                ))}
            </div>

        </div>
    )
}