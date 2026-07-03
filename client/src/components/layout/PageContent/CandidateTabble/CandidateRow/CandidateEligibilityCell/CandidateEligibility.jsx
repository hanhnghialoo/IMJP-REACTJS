import './CandidateEligibility.css';

import Badge from '../../../../../common/Badge/Badge';

import { FaRegCircleCheck } from "react-icons/fa6";
import { FiXCircle } from "react-icons/fi";
import { PiWarningBold } from "react-icons/pi";

import { useTranslation } from 'react-i18next';

function CandidateEligibility({
    candidate,
    onExpand,
    isExpanded,
    className ='',
}){
    const {t} = useTranslation('eligibility');
    const handleClick=()=>{
        onExpand(
            candidate.id,
            'eligibility'
        )
    }
    return(
        <div className={`candidate-eligibility ${className}
            ${isExpanded ? 'active' : ''}`}
            onClick={handleClick}
        >
            {candidate?.eligibility.eligibility==='eligible' ?
                <Badge
                    label={t('eligibility:eligible')}
                    startIcon={<FaRegCircleCheck/>}
                    className={`candidate-eligible ${isExpanded?'expanded':''}`}
                />
            : candidate?.eligibility.eligibility=== 'ineligible'?
                <Badge
                    label={t('eligibility:ineligible')}
                    startIcon={<FiXCircle/>}
                    className={`candidate-ineligible ${isExpanded?'expanded':''}`}
                />
            :
                <Badge
                    label={t('eligibility:pending')}
                    startIcon={<PiWarningBold/>}
                    className={`candidate-pending ${isExpanded?'expanded':''}`}
                />
            }  
        </div>
    )
}

export default CandidateEligibility;