import './StatusDetail.css';
import { useTranslation } from 'react-i18next';
import { BsClipboard2CheckFill } from "react-icons/bs";

export default function StatusDetail({candidate}){
    const {t}=useTranslation('candidate','status','common');
    return(
            <div className='candidate-expanded-status-detail expanded-enter'>
                <div className='detail-expanded-title'>
                    <BsClipboard2CheckFill/>
                    {t('candidate:status')}
                </div>
                <div className='detail-item'>
                    <span className='detail-label'>
                        {t('candidate:status')}
                    </span>
                    <span className='detail-separator'>:</span>
                        <span className='detail-value'>
                            {t(`status:${candidate?.status.status}`)}
                        </span>
                </div>

                <div className='detail-item'>
                    <span className='detail-label'>
                        {t('common:detail')}
                    </span>
                    <span className='detail-separator'>:</span>
                        <span className='detail-value'>
                            {candidate?.status.detail}
                        </span>
                </div>

                <div className='detail-item'>
                    <span className='detail-label'>
                        {t('candidate:note')}
                    </span>
                    <span className='detail-separator'>:</span>
                        <span className='detail-value'>
                            {candidate?.status.noteStatus}
                        </span>
                </div>

                <div className='detail-item'>
                    <span className='detail-label'>
                        {t('candidate:documentStatus')}
                    </span>
                    <span className='detail-separator'>:</span>
                        <span className='detail-value'>
                            {t(`common:${candidate?.document.documentStatus}`)}
                        </span>
                </div>

            </div>
    );
};