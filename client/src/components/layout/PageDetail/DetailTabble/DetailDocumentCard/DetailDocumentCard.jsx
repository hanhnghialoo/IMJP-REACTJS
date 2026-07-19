import './DetailDocumentCard.css';

import usePermission from '../../../../../features/auth/hook/usePermission';
import { useTranslation } from 'react-i18next';

import Button from '../../../../common/Button/Button';
import Badge from '../../../../common/Badge/Badge';

import { RiEdit2Fill } from "react-icons/ri";
import { IoDocuments } from "react-icons/io5";
import { MdDragIndicator } from "react-icons/md";
import { STATUS_CONFIG } from '../../../../../assets/icon/configs/statusConfigs';
import { formatDateOfBirth } from '../../../../../utils/formatDateOfBirth';

export default function DetailDocumentCard({
    candidate,
    isActive,
    onEdit
}){
    const {t} = useTranslation('');
    const {canEditCandidate} = usePermission();
    const resultData = STATUS_CONFIG[candidate?.status?.status];
    // if(!resultData){
    //     return null;
    // }
    const labelBadge = resultData?.label;
    const IconBadge = resultData?.icon;
    return(
        <div className='detail-document-card'>
            <div className='detail-document-title'>
                <MdDragIndicator/>
                {t('candidate:status')}
            </div>
            {resultData && IconBadge ? (
                <Badge
                    startIcon={<IconBadge/>}
                    className={`detail-${labelBadge}`}
                    label={t(`${labelBadge}`)}
                />
            ) : 
                <Badge
                    label={t('common:empty')}
                    className='detail-common:empty'
                />
            }
            <div className='detail-item-card status-detail'>
                <span className='detail-label-card'>
                    {t('common:detail')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {candidate?.status?.detail}
                </span>
            </div>
            <div className='detail-item-card status-note'>
                <span className='detail-label-card'>
                    {t('candidate:note')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {candidate?.status?.noteStatus}
                </span>
            </div>

            <div className='detail-divider'></div>

            <div className='detail-document-title'>
                <IoDocuments/>
                {t('candidate:application')}
            </div>

            {canEditCandidate &&
                <Button
                    icon={<RiEdit2Fill/>}
                    className={`btn-edit-candidate document ${isActive ? 'active' : ''} `}
                    onClick={onEdit}
                />
            }

            <div className='detail-item-card'>
                <span className='detail-label-card'>
                    {t('candidate:documentStatus')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {t(`${candidate?.document?.documentStatus}`)}
                </span>
            </div>

            <div className='detail-item-card'>
                <span className='detail-label-card'>
                    {t('candidate:submissionDate')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {formatDateOfBirth(candidate?.document?.submissionDate)}
                </span>
            </div>

            <div className='detail-item-card'>
                <span className='detail-label-card'>
                    {t('candidate:submissionMethod')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {t(`candidate:${candidate?.document?.submissionMethod}`)}
                </span>
            </div>

            <div className='detail-item-card'>
                <span className='detail-label-card'>
                    {t('candidate:recordedDate')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {candidate?.document?.recordedDate}
                </span>
            </div>
        </div>
    )
}