export const TimelineStep = {
    CONSULTING: 'consulting',
    PROFILE: 'profile',
    EXAM: 'exam',
    RESULT: 'result',
};

export const TimelineStatus = {
    COMPLETE: 'complete',
    CURRENT: 'current',
    PENDING: 'pending',
    REJECTED: 'rejected',
    WARNING:'warning',
};

export const TIMELINE_STEPS = [
    {
        id: TimelineStep.CONSULTING,
        label:'consultation',
    },
    {
        id: TimelineStep.PROFILE,
        label:'application',
    },
    {
        id: TimelineStep.EXAM,
        label:'assessment',
    },
    {
        id: TimelineStep.RESULT,
        label:'result',
    },
];