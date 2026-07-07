import { GoCheckCircleFill } from "react-icons/go";
import { GoClockFill } from "react-icons/go";
import { GoXCircleFill } from "react-icons/go";
import { BsExclamationOctagonFill } from "react-icons/bs";
import { MdFamilyRestroom } from "react-icons/md";
import { CiFileOff } from "react-icons/ci";


export const STATUS_OPTIONS = [
    {
        value: 'agreed',
        labelKey: 'status:agreed',
        icon: GoCheckCircleFill,
        className: 'status-agreed'
    },
    {
        value: 'considering',
        labelKey: 'status:considering',
        icon: GoClockFill,
        className: 'status-considering'
    },
    {   
        value: 'notInterested',
        labelKey: 'status:notInterested',
        icon: GoXCircleFill,
        className: 'status-not-interested'
    },
    {
        value: 'undecided',
        labelKey: 'status:undecided',
        icon: BsExclamationOctagonFill,
        className: 'status-undecided'
    },
    {
        value: 'familyApproval',
        labelKey: 'status:familyApproval',
        icon: MdFamilyRestroom,
        className: 'status-family-approval'
    },
    // {
    //     value:'empty',
    //     labelKey:'common:empty',
    //     icon: CiFileOff,
    //     className:'status-empty'
    // }
]
