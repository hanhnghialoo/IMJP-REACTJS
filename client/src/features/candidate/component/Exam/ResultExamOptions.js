
import { GoDotFill } from "react-icons/go";

export const RESULT_EXAM_OPTIONS = [
    {   value: 'passed',
        labelKey: 'result:passed',
        icon: GoDotFill,
        className:'exam-passed'
    },
    {
        value: 'failedRetest',
        labelKey: 'result:failedRetest',
        icon: GoDotFill,
        className:'exam-failed-retest'
    },
    {
        value: 'failedNonRetest',
        labelKey: 'result:failedNonRetest',
        icon: GoDotFill,
        className:'exam-failed-non-retest'
    },
    {
        value:'postponed',
        labelKey: 'result:postponed',
        icon: GoDotFill,
        className:'exam-postponed'
    },
    {
        value:'absent',
        labelKey: 'result:absent',
        icon: GoDotFill,
        className:'exam-absent'
    },
    {
        value:'enrolled',
        labelKey: 'result:enrolled',
        icon: GoDotFill,
        className:'exam-enrolled'
    },
    {
        value: 'notEnrolled',
        labelKey: 'result:notEnrolled',
        icon: GoDotFill,
        className:'exam-notEnrolled'
    },
    {
        value:'empty',
        labelKey: 'common:empty',
        icon: GoDotFill,
        className:'exam-empty'
    },
]
