import './DetailResultCard.css';

import usePermission from '../../../../../features/auth/hook/usePermission';
import { useTranslation } from 'react-i18next';
import Button from '../../../../common/Button/Button';
import Badge from '../../../../common/Badge/Badge';
import { MAPPING_CONFIG } from '../../../../../assets/icon/configs/mappingConfigs';

import { RiEdit2Fill } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import { FaBook } from "react-icons/fa";

export default function DetailResultCard({
    candidate,
    onEdit
}){
    const {t}=useTranslation('');
    const {canEditCandidate} = usePermission();
    const resultData = MAPPING_CONFIG[candidate?.result?.result];
        const labelBadge = resultData?.label;
        // if(!resultData){
        //     return null;
        // }

    return(
        <div className='detail-result-card'>

            <div className='detail-result-title'>
                <FaBook/>
                {t('result:assessment')}
            </div>

            {canEditCandidate &&
                <Button
                    icon={<RiEdit2Fill/>}
                    className='btn-edit-candidate result'
                    onClick={onEdit}
                />
            }
            {resultData && labelBadge ?
                <Badge
                    startIcon={
                        <GoDotFill
                        className={`${labelBadge}`} 
                    />}
                    label={t(`${labelBadge}`)}
                    className={`detail-${labelBadge}`}
                />
                : 
                <Badge
                    label={t('common:empty')}
                    className={'detail-common:empty'}
                />
            }

            <div className='detail-item-card result-reason'>
                <span className='detail-label-card'>
                    {t('candidate:reason')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {candidate?.result.reason}
                </span>
            </div>

            <div className='detail-item-card result-note'>
                <span className='detail-label-card'>
                    {t('candidate:note')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {candidate?.result.noteResult}
                </span>
            </div>

            <div className='detail-item-card result-date'>
                <span className='detail-label-card'>
                    {t('candidate:recordedDate')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {candidate?.result.resultedDate}
                </span>
            </div>

            <div className='detail-item-card result-batch-code'>
                <span className='detail-label-card'>
                    {t('candidate:batchCode')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {candidate?.result.batchCode}
                </span>
            </div>
            
        </div>
    )
}