import './CandidateDocument.css';

import Badge from '../../../../../common/Badge/Badge';

import { useTranslation } from 'react-i18next';

import { MdKeyboardArrowDown } from "react-icons/md";

function CandidateDocument({
    candidate,
    onExpand,
    isExpanded
}){
    const {t} = useTranslation('common');
    const handleClick=()=>{
        onExpand(
            candidate.id,
            'document'
        )
    }
    return(
        <td className={`candidate-document
            ${isExpanded ? 'active' : ''}`}
            onClick={handleClick}
        >
            {candidate.document.documentStatus==='submitted' ?
                <Badge
                    label={t('common:submitted')}
                    endIcon={<MdKeyboardArrowDown
                        className={`expand-icon ${isExpanded ? 'expanded' : ''}`}
                    />}
                    className={'candidate-document'}
                />
            :   
                <Badge
                label={t('common:empty')}
                className={'candidate-document-empty'}
                />
            }
        </td>
    )
}

export default CandidateDocument;