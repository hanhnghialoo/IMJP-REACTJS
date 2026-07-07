import { BiSolidBellRing } from "react-icons/bi";
import { IoSparkles } from "react-icons/io5";
import { BiRevision } from "react-icons/bi";


export const STATUS_FITER_OPTIONS = [
    {
        value: 'needAction',
        labelKey: 'candidate:needAction',
        icon: BiSolidBellRing,
        className: 'filter-need-action'
    },
    {
        value: 'newRecently',
        labelKey: 'candidate:newRecently',
        icon: IoSparkles,
        className: 'filter-new-recently'
    },
    {
        value: 'newUpdate',
        labelKey: 'candidate:newUpdate',
        icon: BiRevision,
        className: 'filter-new-update'
    },
]