import './ResultDetail.css';
import { useTranslation } from 'react-i18next';

export default function ResultDetail({candidate}){
    const {t}=useTranslation('candidate','result');
    return(
            <div className='candidate-expanded-result-detail expanded-enter'>
        
                <div className='detail-item'>
                    <span className='detail-label'>
                        {t('candidate:result')}
                    </span>
                    <span className='detail-separator'>:</span>
                        <span className='detail-value'>
                            {t(`result:${candidate.result.result}`)}
                        </span>
                </div>

                <div className='detail-item'>
                    <span className='detail-label'>
                        {t('candidate:reason')}
                    </span>
                    <span className='detail-separator'>:</span>
                        <span className='detail-value'>
                            {t(`result:${candidate.result.reason}`)}
                        </span>
                </div>

            </div>
    );
};