import { TiWarning } from "react-icons/ti";
import { GoCheckCircleFill } from "react-icons/go";
import { GoXCircleFill } from "react-icons/go";

export const ELIGIBILITY_OPTIONS = [
    {
        value: 'eligible',
        labelKey: 'eligibility:eligible',
        icon: GoCheckCircleFill,
        className: 'candidate-eligible'
    },
    {
        value: 'ineligible',
        labelKey: 'eligibility:ineligible',
        icon: GoXCircleFill,
        className: 'candidate-ineligible'
    },
    {
        value: 'pending',
        labelKey: 'eligibility:pending',
        icon: TiWarning,
        className: 'candidate-pending'
    }
];