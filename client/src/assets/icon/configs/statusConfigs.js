import { GoCheckCircleFill } from "react-icons/go";
import { GoClockFill } from "react-icons/go";
import { GoXCircleFill } from "react-icons/go";
import { BsExclamationOctagonFill } from "react-icons/bs";
import { MdFamilyRestroom } from "react-icons/md";
import { CiFileOff } from "react-icons/ci";



export const STATUS_CONFIG = {
    agreed: {
        label: 'status:agreed',
        icon: GoCheckCircleFill,
    },
    considering: {
        label: 'status:considering',
        icon: GoClockFill,
    },
    notInterested: {
        label: 'status:notInterested',
        icon: GoXCircleFill,
    },
    undecided: {
        label: 'status:undecided',
        icon:BsExclamationOctagonFill,
    },
    familyApproval: {
        label: 'status:familyApproval',
        icon: MdFamilyRestroom,
    },
    empty:{
        label: 'common:empty',
        icon: CiFileOff,
    }
}
