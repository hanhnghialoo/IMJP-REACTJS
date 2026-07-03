import {
    TimelineStatus,
    TIMELINE_STEPS
} from '../constants/timelineSteps';

export function buildTimeline(
    currentStep,
    candidateStatus = ''
){
    const currentIndex = 
        TIMELINE_STEPS.findIndex(
            step => step.id === currentStep
        );
        return TIMELINE_STEPS.map(
            (step, index) => {
                if (currentStep === 'result'){
                    return {
                        ...step,
                        status: TimelineStatus.COMPLETE,
                    };
                }
                let status = TimelineStatus.PENDING;
                if (index < currentIndex){
                    status = TimelineStatus.COMPLETE;
                } else if (index === currentIndex){
                    switch (candidateStatus){
                        case 'rejected':
                            status = TimelineStatus.REJECTED;
                            break;
                        case 'warning':
                            status = TimelineStatus.WARNING;
                            break;
                        default:
                            status = TimelineStatus.CURRENT;
                    }
                }
                // if (currentStep === 'result') {
                //     status = TimelineStatus.COMPLETE;
                // }
                // else if (index < currentIndex) {
                //     status = TimelineStatus.COMPLETE;
                // }
                // else if (index === currentIndex) {
                //     status =
                //         candidateStatus === 'rejected'
                //             ? TimelineStatus.REJECTED
                //             : candidateStatus ==='warning'
                //                 ? TimelineStatus.WARNING
                //                 : TimelineStatus.CURRENT;
                // }

                return {
                    ...step,
                    status,
                };
            }
        );
};