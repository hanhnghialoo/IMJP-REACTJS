import './EligibilityDetail.css';
import { useTranslation } from 'react-i18next';
import Badge from '../../../../../../common/Badge/Badge';
import { MdDomainVerification } from "react-icons/md";



function EligibilityDetail({candidate}){
    const {t}=useTranslation('candidate');
    return(
            <div className='candidate-expanded-eligibility-detail expanded-enter'>
                <div className='detail-expanded-title'>
                    <MdDomainVerification/>
                    {t('candidate:eligibility')}
                </div>
                <div className='detail-item'>
                    <span className='detail-label'>
                        {t('candidate:eligibility')}
                    </span>
                    <span className='detail-separator'>:</span>
                        <span className='detail-value'>
                            {candidate?.eligibility.eligibility==='eligible' ?
                                <Badge
                                    label={t('eligibility:eligible')}
                                />
                            : candidate?.eligibility.eligibility === 'ineligible'?
                                <Badge
                                    label={t('eligibility:ineligible')}
                                />
                            :
                                <Badge
                                    label={t('eligibility:pending')}
                                />
                            }  
                        </span>
                </div>

                <div className='detail-item'>
                    <span className='detail-label'>
                        {t('candidate:reason')}
                    </span>
                    <span className='detail-separator'>:</span>
                        <span className='detail-value'>
                            {candidate.eligibility.reason}
                        </span>
                </div>
            </div>
    );
};

export default EligibilityDetail;