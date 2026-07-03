import { FaCheck } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import { FaXmark } from "react-icons/fa6";
import { FaExclamation } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { CiFileOff } from "react-icons/ci";

export const STATUS_OPTIONS = [
    {
        value: 'agreed',
        labelKey: 'status:agreed',
        icon: FaCheck,
        className: 'status-agreed'
    },
    {
        value: 'considering',
        labelKey: 'status:considering',
        icon: LuClock,
        className: 'status-considering'
    },
    {   
        value: 'notInterested',
        labelKey: 'status:notInterested',
        icon: FaXmark,
        className: 'status-not-interested'
    },
    {
        value: 'undecided',
        labelKey: 'status:undecided',
        icon:FaExclamation,
        className: 'status-undecided'
    },
    {
        value: 'familyApproval',
        labelKey: 'status:familyApproval',
        icon: MdFamilyRestroom,
        className: 'status-family-approval'
    },
    {
        value:'empty',
        labelKey:'common:empty',
        icon: CiFileOff,
        className:'status-empty'
    }
]
