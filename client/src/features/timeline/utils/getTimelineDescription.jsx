import { TimelineStep } from '../constants/timelineSteps';

export function getTimelineDescription(
    stepId,
    candidate,
    t
){
    switch (stepId) {
        case TimelineStep.CONSULTING:
            return candidate?.eligibility?.eligibility
                ? 
                ( 
                    <>
                        {t(`eligibility:${candidate.eligibility.eligibility}`)} 
                        {/* <br/>
                        {t(`status:${candidate.status.status}`)} */}
                    </>
                )
                : t('timeline:waitingApplication');

        case TimelineStep.PROFILE:
            return (
                <>
                    <div>
                        {t(`common:${candidate?.document?.documentStatus}`)}
                    </div>
                    {candidate?.document.submissionMethod && 
                        <div>
                            {t('candidate:submissionMethod')} - {t(`candidate:${candidate?.document?.submissionMethod}`)}
                        </div>
                    }
                </>
            )
            
        case TimelineStep.EXAM:
            return (
                <>
                    {candidate?.result.result !=='empty' && 
                        <div>
                            {t(`result:${candidate?.result.result}`)}
                        </div>
                    }
                </>
            )

        // case TimelineStep.RESULT:
        //     return (
        //         <>
        //             {candidate?.status.status !== 'empty' && 
        //                 <div>
        //                     {t(`status:${candidate?.status.status}`)}
        //                 </div>
        //             }
        //         </>
        //         )
        default:
            return '';
    }
}