import { TimelineStep } from "../constants/timelineSteps";

export function getTimelineTime(
    stepId,
    candidate,
    t
){
    switch (stepId){
        case TimelineStep.CONSULTING:
            return(
                <>
                    <div>
                        {candidate?.consultation.consultationDate}
                    </div>
                </>
            )
        
        case TimelineStep.PROFILE:
            return(
                <>
                    {candidate?.document.submissionDate &&
                        <div>
                           {candidate?.document.submissionDate}
                        </div>
                    }
                </>
            )
        
        case TimelineStep.EXAM:
            return(
                <>                        
                    {candidate?.result.resultedDate &&
                          <div>
                           {candidate?.result.resultedDate}
                        </div>
                    }
                </>                
            )

    default:
        return '';
    }
}