import './ContactDetail.css';

import { useTranslation } from 'react-i18next';
import { formatPhoneNumber } from '../../../../../../../utils/formatPhoneNumber';
import { getNameProvince } from '../../../../../../../features/timeline/utils/getNameProvince';

function ContactDetail({candidate}){
    const {t} = useTranslation('candidate');
    return(
            <div className='candidate-expanded-contact-detail expanded-enter'>

                <div className='detail-item'>
                    <span className='detail-label'>
                        {t('candidate:phoneNumber')}
                    </span>
                    <span className='detail-separator'>:</span>
                    <span className='detail-value'>
                        {formatPhoneNumber(candidate.contact.phone)}
                    </span>
                </div>

                <div className='detail-item'>
                    <span className='detail-label'>
                        {t('candidate:province')}
                    </span>
                    <span className='detail-separator'>:</span>
                    <span className='detail-value'>
                        {getNameProvince(candidate.contact.newHomeTown)}
                    </span>
                </div>

                <div className='detail-item'>
                    <span className='detail-label'>
                        {t('candidate:oldProvince')}
                    </span>
                    <span className='detail-separator'>:</span>
                    <span className='detail-value'>
                        {candidate.contact.oldHomeTown}
                    </span>
                </div>

                <div className='detail-item'>
                    <span className='detail-label'> 
                        {t('candidate:familyMember')} {'('}{candidate.contact.familyMember}{')'}
                    </span>
                    <span className='detail-separator'>:</span>
                    <span className='detail-value'>
                        {formatPhoneNumber(candidate.contact.familyMemberPhone)}
                    </span>
                </div>

                <div className='detail-item'>
                    <span className='detail-label'> 
                        {t('candidate:email')} 
                    </span>
                    <span className='detail-separator'>:</span>
                    <span className='detail-value'>
                        {candidate.contact.email}
                    </span>
                </div>
            </div>
    )
}

export default ContactDetail;