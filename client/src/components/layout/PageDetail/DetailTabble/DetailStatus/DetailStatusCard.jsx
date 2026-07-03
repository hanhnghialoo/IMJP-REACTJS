import './DetailStatusCard.css';

import usePermission from '../../../../../features/auth/hook/usePermission';
import { useTranslation } from 'react-i18next';

import Button from '../../../../common/Button/Button';
import Badge from '../../../../common/Badge/Badge';
import { STATUS_CONFIG } from '../../../../../assets/icon/configs/statusConfigs';

import { RiEdit2Fill } from "react-icons/ri";
import { MdDragIndicator } from "react-icons/md";

export default function DetailStatusCard({
    candidate,
    onEdit
}){
    const {t} = useTranslation();
    const {canEditCandidate} = usePermission();
    const resultData = STATUS_CONFIG[candidate?.status?.status];
    if(!resultData){
        return null
    }
    const labelBadge = resultData?.label;
    const IconBadge = resultData?.icon;

    return(
        <div className='detail-status-card'>
            <div className='detail-status-title'>
                <MdDragIndicator/>
                {t('candidate:status')}
            </div>

            {canEditCandidate && 
                <Button
                    icon={<RiEdit2Fill/>}
                    className='btn-edit-candidate status'
                    onClick={onEdit}
                />
            }

            <Badge
                startIcon={<IconBadge/>}
                className={`detail-${labelBadge}`}
                label={t(`${labelBadge}`)}
            />

            <div className='detail-item-card status-detail'>
                <span className='detail-label-card'>
                    {t('common:detail')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {candidate?.status.detail}
                </span>
            </div>

            <div className='detail-item-card status-note'>
                <span className='detail-label-card'>
                    {t('candidate:note')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {candidate?.status.noteStatus}
                </span>
            </div>

     

        </div>
    )
}