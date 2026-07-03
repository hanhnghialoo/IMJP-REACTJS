import { FaRegCircleCheck } from "react-icons/fa6";
import { FiXCircle } from "react-icons/fi";
import { PiWarningBold } from "react-icons/pi";

export const ELIGIBILITY_OPTIONS = [
    {
        value: 'eligible',
        labelKey: 'eligibility:eligible',
        icon: FaRegCircleCheck,
        className: 'candidate-eligible'
    },
    {
        value: 'ineligible',
        labelKey: 'eligibility:ineligible',
        icon: FiXCircle,
        className: 'candidate-ineligible'
    },
    {
        value: 'pending',
        labelKey: 'eligibility:pending',
        icon: PiWarningBold,
        className: 'candidate-pending'
    }
];