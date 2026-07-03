import './CandidateResult.css'

import { MAPPING_CONFIG } from '../../../../../assets/icon/configs/mappingConfigs';
import { useTranslation } from 'react-i18next';
import Badge from '../../../../common/Badge/Badge';
import { GoDotFill } from "react-icons/go";

function CandidateResult({
    candidate,
    onExpand,
    isExpanded,
    className='',
}){
    const {t}=useTranslation('result');
    const handleClick=()=>{
        onExpand(
            candidate.id,
            'result'
        )
    }
    const resultData = MAPPING_CONFIG[candidate.result?.result];
    const labelBadge = resultData?.label;
    if(!resultData){
        return null;
    }
    return(
        <div className={`candidate-result ${className}
            ${isExpanded ? 'active' : ''}`}
            onClick={handleClick}
        >
                <Badge
                    startIcon={
                        <GoDotFill
                        className={`${labelBadge}`} 
                    />}
                    label={t(`${labelBadge}`)}
                    className={`${labelBadge} ${isExpanded?'expanded':''}`}
                />
        </div>
    )
}

export default CandidateResult;