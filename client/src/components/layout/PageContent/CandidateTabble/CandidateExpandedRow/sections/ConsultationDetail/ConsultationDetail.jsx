import './ConsultationDetail.css';
import { useTranslation } from 'react-i18next';

function ConsultationDetail({candidate}){
    const {t}= useTranslation('candidate');
    return (
            <div className='candidate-expanded-consultation-detail expanded-enter'>
        
                <div className='detail-item'>
                    <span className='detail-label'>
                        {t('candidate:lastConsultation')}
                    </span>
                    <span className='detail-separator'>:</span>
                        <span className='detail-value'>
                            {candidate?.consultation.consultationDate}
                        </span>
                </div>

                <div className='detail-item'>
                    <span className='detail-label'>
                        {t('candidate:preference')}
                    </span>
                    <span className='detail-separator'>:</span>
                        <span className='detail-value'>
                            {candidate?.consultation.preference}
                        </span>
                </div>

                <div className='detail-item'>
                    <span className='detail-label'>
                        {t('candidate:note')}
                    </span>
                    <span className='detail-separator'>:</span>
                        <span className='detail-value'>
                            {candidate?.consultation.note}
                        </span>
                </div>

                <div className='detail-item'>
                    <span className='detail-label'>
                        {t('candidate:personalCharacteristics')}
                    </span>
                    <span className='detail-separator'>:</span>
                        <span className='detail-value'>
                            {candidate?.consultation.personalCharacteristics}
                        </span>
                </div>
            </div>
    )
}

export default ConsultationDetail;