import './CandidateConsultation.css';

import Badge from '../../../../../common/Badge/Badge';
import { useTranslation } from 'react-i18next';

import { MdKeyboardArrowDown } from "react-icons/md";


function CandidateConsultation({
    candidate,
    onExpand,
    isExpanded
}){
    const {t} = useTranslation('common');
    const handleClick =()=> {
        onExpand(
            candidate.id,
            'consultation'
        );
    }
    return(
        <div className={`candidate-consultation
            ${isExpanded ? 'active' : ''}`}
            onClick={handleClick}
        >
            {candidate.consultation.consultationDate?
                <Badge
                    label={candidate.consultation.consultationDate}
                    endIcon={<MdKeyboardArrowDown
                        className={`expand-icon ${isExpanded ? 'expanded' : ''}`}
                    />}
                    className={`candidate-consultation ${isExpanded ? 'expanded' : ''}`}
                />
            :
                <Badge
                    label={t('common:empty')}
                    className={`candidate-consultation-empty ${isExpanded ? 'expanded' : ''}`}
                />
            }
        </div>
    )
}

export default CandidateConsultation;