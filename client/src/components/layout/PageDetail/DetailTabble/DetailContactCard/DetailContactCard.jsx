import './DetailContactCard.css';

import { useTranslation } from 'react-i18next';
import Button from '../../../../common/Button/Button';
import { formatPhoneNumber } from '../../../../../utils/formatPhoneNumber';

import { RiEdit2Fill } from "react-icons/ri";
import { FaSquarePhone } from "react-icons/fa6";
import usePermission from '../../../../../features/auth/hook/usePermission';
import { getNameProvince } from '../../../../../features/timeline/utils/getNameProvince';

export default function DetailContactCard({
    candidate,
    onEdit,
    isActive
}){
    const {t}= useTranslation('candidate');
    const {canEditCandidate} = usePermission();
    return(
        <div className='detail-contact-card'>
            <div className='detail-contact-title'>
                <FaSquarePhone/>
                {t('candidate:contact')}
            </div>
            <div className='detail-item-card'>
                <span className='detail-label-card'>
                    {t('candidate:phoneNumber')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {formatPhoneNumber(`${candidate?.contact.phone}`)}
                </span>
            </div>

            <div className='detail-item-card'>
                <span className='detail-label-card'>
                    {t('candidate:address')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {candidate?.contact.address}
                </span>
            </div>

            <div className='detail-item-card'>
                <span className='detail-label-card'>
                    {t('candidate:province')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {getNameProvince(candidate?.contact.newHomeTown)}
                </span>
            </div>

            <div className='detail-item-card'>
                <span className='detail-label-card'>
                    {t('candidate:oldProvince')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {candidate?.contact.oldHomeTown}
                </span>
            </div>

            <div className='detail-item-card'>
                <span className='detail-label-card'>
                    {t('candidate:email')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {candidate?.contact.email}
                </span>
            </div>

            <div className='detail-item-card'>
                <span className='detail-label-card'>
                    {t('candidate:familyMember')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {candidate?.contact.familyMember} {' - '}
                    {formatPhoneNumber(`${candidate?.contact.familyMemberPhone}`)}
                </span>
            </div>
            { canEditCandidate &&
                <Button
                    icon={<RiEdit2Fill/>}
                    className={`btn-edit-candidate contact ${isActive?'active':''}`}
                    onClick={onEdit}
                />
            }

        </div>
    )
}