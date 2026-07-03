import './DetailInfoCard.css';

import Button from '../../../../common/Button/Button';

import { useTranslation } from 'react-i18next';
import usePermission from '../../../../../features/auth/hook/usePermission';
import { getNameProvince } from '../../../../../features/timeline/utils/getNameProvince';

import { RiEdit2Fill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";

export default function DetailInfoCard({
    candidate,
    onEdit,
    isActive
}){
    const {t} = useTranslation('candidate');
    const {canEditCandidate} = usePermission();
    return(
        <div className='detail-info-card'>

            <div className='detail-info-title'>
                <FaUserCircle/>
                {t('candidate:personalInformation')}
            </div>
            
            <div className='detail-item-card'>
                <span className='detail-label-card'>
                    {t('candidate:fullname')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {candidate?.info.fullName}
                </span>
            </div>
            <div className='detail-item-card'>
                <span className='detail-label-card'>
                    {t('candidate:sex')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {t(`candidate:${candidate?.info.gender}`)}
                </span>
            </div>
            <div className='detail-item-card'>
                <span className='detail-label-card'>
                    {t('candidate:dateOfBirth')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {t(`candidate:${candidate?.info.dateOfBirth}`)}
                </span>
            </div>
            <div className='detail-item-card'>
                <span className='detail-label-card'>
                    {t('candidate:homeTown')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {getNameProvince(candidate?.contact.newHomeTown)}
                </span>
            </div>
            
            {canEditCandidate &&
                <Button
                    icon={<RiEdit2Fill/>}
                    className={`btn-edit-candidate info ${isActive?'active':''}`}
                    onClick={onEdit}
                />
            }

        </div>
    )
}