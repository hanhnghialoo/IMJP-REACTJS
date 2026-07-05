import './DocumentDetail.css';
import { useTranslation } from 'react-i18next';

export default function DocumentDetail({candidate}){
    const {t} =useTranslation('candidate', 'common');
    return(
        <td colSpan={9}>
            <div className='candidate-expanded-document-detail expanded-enter'>
                <div className='detail-expanded-title'>
                    <BsChatLeftText/>
                    {t('candidate:application')}
                </div>
                <div className='detail-item'>
                    <span className='detail-label'>
                        {t('candidate:documentStatus')}
                    </span>
                    <span className='detail-separator'>:</span>
                        <span className='detail-value'>
                            {t(`common:${candidate.document.documentStatus}`)}
                        </span>
                </div>

                <div className='detail-item'>
                    <span className='detail-label'>
                        {t('candidate:submissionDate')}
                    </span>
                    <span className='detail-separator'>:</span>
                        <span className='detail-value'>
                            {candidate.document.documentDate}
                        </span>
                </div>

                <div className='detail-item'>
                    <span className='detail-label'>
                        {t('candidate:submissionMethod')}
                    </span>
                    <span className='detail-separator'>:</span>
                        <span className='detail-value'>
                            {t(`candidate:${candidate.document.submissionMethod}`)}
                        </span>
                </div>

                <div className='detail-item'>
                    <span className='detail-label'>
                        {t('candidate:recordedDate')}
                    </span>
                    <span className='detail-separator'>:</span>
                        <span className='detail-value'>
                            {candidate.document.recordedDate}
                        </span>
                </div>
                
            </div>
        </td>
    )
}