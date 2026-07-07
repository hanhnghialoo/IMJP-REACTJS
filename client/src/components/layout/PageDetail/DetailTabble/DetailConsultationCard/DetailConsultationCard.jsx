import './DetailConsultationCard.css';

import usePermission from '../../../../../features/auth/hook/usePermission';
import Button from '../../../../common/Button/Button';

import { useTranslation } from 'react-i18next';
import Badge from '../../../../common/Badge/Badge';
import { RiEdit2Fill } from "react-icons/ri";

import { GoCheckCircleFill } from "react-icons/go";
import { GoXCircleFill } from "react-icons/go";
import { TiWarning } from "react-icons/ti";

import { IoChatbubblesSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";


export default function DetailConsultationCard({
    candidate,
    isActive,
    onEdit
}){
    const {t}=useTranslation('candidate','status');
    const {canEditCandidate} = usePermission();

    return(
        <div className='detail-consultation-card'>
            
            <span className='detail-consultation-title'>
                <IoChatbubblesSharp/>
                {t('candidate:consultationInformation')}
            </span>

            <div className='detail-item-card date'>
                <span className='detail-label-card'>
                    {t('candidate:lastConsultation')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {candidate?.consultation.consultationDate}
                </span>
            </div>

            <div className='detail-item-card preference'>
                <span className='detail-label-card'>
                    {t('candidate:preference')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {candidate?.consultation.preference}
                </span>
            </div>

            <div className='detail-item-card note'>
                <span className='detail-label-card'>
                    {t('candidate:note')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {candidate?.consultation.note}
                </span>
            </div>

            <div className='detail-item-card character'>
                <span className='detail-label-card'>
                    {t('candidate:personalCharacteristics')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {candidate?.consultation.personalCharacteristics}
                </span>
            </div>
            <div className='detail-divider'></div>
            

            {canEditCandidate &&
                <Button
                    icon={<RiEdit2Fill/>}
                    className={`btn-edit-candidate consultation ${isActive ? 'active':''}`}
                    onClick={onEdit}
                />
            }

            <span className='detail-consultation-title'>
                <FaStar/>
                {t('eligibility:candidateEligibility')}
            </span>
            <div className='detail-consultation-status'>
                <span className={`detail-consultation-status-badge`}>
                    {candidate?.eligibility.eligibility==='eligible' ?
                        <Badge
                            label={t('eligibility:eligible')}
                            startIcon={<GoCheckCircleFill/>}
                            className={'candidate-eligible-card detail'}
                        />
                    : candidate?.eligibility.eligibility=== 'ineligible'?
                        <Badge
                            label={t('eligibility:ineligible')}
                            startIcon={<GoXCircleFill/>}
                            className={'candidate-ineligible-card detail'}
                        />
                    :
                        <Badge
                            label={t('eligibility:pending')}
                            startIcon={<TiWarning/>}
                            className={'candidate-pending-card detail'}
                        />
                    }  
                </span>
            </div>

            <div className='detail-item-card detail-status'>
                <span className='detail-label-card'>
                    {t('candidate:reason')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card'>
                    {candidate?.eligibility.detail}
                </span>
            </div>

        </div>
    )
}