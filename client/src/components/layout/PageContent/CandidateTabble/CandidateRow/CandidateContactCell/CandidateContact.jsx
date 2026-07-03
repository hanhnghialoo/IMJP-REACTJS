import './CandidateContact.css';

import Badge from '../../../../../common/Badge/Badge';
import { useTranslation } from 'react-i18next';
import { formatPhoneNumber } from '../../../../../../utils/formatPhoneNumber';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function CandidateContact({
    candidate,
    onExpand,
    isExpanded
}){
    const {t} = useTranslation('common');

    const handleClick =()=> {
        onExpand(
            candidate.id,
            'contact'
        );
    }
    return(
        <div className={`candidate-contact
            `}
            onClick={handleClick}
        >
            {candidate.contact.phone ? (
                <Badge
                    label={formatPhoneNumber(candidate.contact.phone)}
                    endIcon={<MdKeyboardArrowDown
                        className={`expand-icon ${isExpanded ? 'expanded' : ''}`}
                    />}
                    className={`candidate-contact ${isExpanded ? 'expanded' : ''}`}
                />
            ) : (
                <Badge
                    label={t('common:empty')}
                    className={`candidate-contact-empty ${isExpanded ? 'expanded' : ''}`}
                />
            )}
        </div>
    )
}

export default CandidateContact;