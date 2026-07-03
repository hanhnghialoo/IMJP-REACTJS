import { FaCheck } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import { FaXmark } from "react-icons/fa6";
import { FaExclamation } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { CiFileOff } from "react-icons/ci";



export const STATUS_CONFIG = {
    agreed: {
        label: 'status:agreed',
        icon: FaCheck,
    },
    considering: {
        label: 'status:considering',
        icon: LuClock,
    },
    notInterested: {
        label: 'status:notInterested',
        icon: FaXmark,
    },
    undecided: {
        label: 'status:undecided',
        icon:FaExclamation,
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
