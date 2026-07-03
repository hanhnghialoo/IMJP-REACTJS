import './CandidateStatus.css';

import Badge from '../../../../../common/Badge/Badge';
import { useTranslation } from 'react-i18next';
import { STATUS_CONFIG } from '../../../../../../assets/icon/configs/statusConfigs';

function CandidateStatus({
    candidate,
    onExpand,
    isExpanded,
    className='',
}){
    const {t} = useTranslation('status');
    const handleClick=()=>{
        onExpand(
            candidate.id,
            'status'
        )
    }
    const sourceStatus = STATUS_CONFIG[candidate?.status.status];
        if(!sourceStatus){
            return null;
        }
        const IconStatus = sourceStatus.icon;
    
    return(
        <div className={`candidate-status ${className}
            ${isExpanded ? 'active' : ''}`}
            onClick={handleClick}
        >
            <Badge
                startIcon={<IconStatus className={sourceStatus.label}/>}
                label={t(`${sourceStatus.label}`)}
                className={`candidate-status ${isExpanded?'expanded':''}`}
            />
        </div>
    )
}

export default CandidateStatus;