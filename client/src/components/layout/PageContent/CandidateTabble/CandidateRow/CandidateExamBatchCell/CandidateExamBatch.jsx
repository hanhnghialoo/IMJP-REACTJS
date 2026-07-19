import './CandidateExamBatch.css';

import Badge from '../../../../../common/Badge/Badge';

import { useTranslation } from 'react-i18next';

function CandidateExamBatch({candidate}){
    const {t} = useTranslation('common');
    return(
        <div className='candidate-exam-batch'>
            {candidate.result.batchCode !=='' ?
                <Badge
                    label={candidate?.result.batchCode}
                    className='candidate-exam-batch'
                />
            : 
                <Badge
                    label={t('common:empty')}
                    className='candidate-exam-batch-empty'
                />
            }
        </div>
    )
}

export default CandidateExamBatch;