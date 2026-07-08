import './DetailTimelineCard.css';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { buildTimeline } from '../../../../../features/timeline/utils/buildTimeline';
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import { FaCircleExclamation } from "react-icons/fa6";

import { getTimelineDescription } from '../../../../../features/timeline/utils/getTimelineDescription.jsx';
import { getTimelineTime } from '../../../../../features/timeline/utils/getTimelineTime.jsx';
import { FaFlag } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";

import Badge from '../../../../common/Badge/Badge.jsx';

export default function DetailTimelineCard({
    candidate,
    activeCard,
    onCardChange
}){
    const {t} = useTranslation('timeline','candidate','eligibility');
    const timeline = buildTimeline(
        candidate?.timeline?.currentStep,
        candidate?.timeline?.status
    )
   
    return(
        <div className='detail-timeline-card'>
            <div className='detail-timeline-title'>
                <FaFlag/>
                {t('timeline:timeline')}
            </div>

            <div className='detail-timeline-list'>
                {timeline.map((step, index) => (
                    <div
                        key={step.id}
                        className={`detail-timeline-item 
                                    ${step.status}
                                    ${activeCard === step.id ? 'active-view' : ''}
                                `}
                        onClick={()=>onCardChange(`${step.id}`)}
                    >
                        <div className='detail-timeline-left'>
                            {index < timeline.length - 1 && (
                                <div
                                    className={`detail-timeline-line ${step.status}`}
                                />
                            )}

                            <div
                                className={`timeline-icon ${step.status}`}
                            >
                                {step.status === 'complete' && (
                                    <FaCheckCircle />
                                )}

                                {step.status === 'current' && (
                                    <FaCircleDot />
                                )}

                                {step.status === 'pending' && (
                                    <FaCircle />
                                )}

                                {step.status === 'rejected' && (
                                    <FaCircleXmark />
                                )}

                                {step.status === 'warning' && (
                                    <FaCircleExclamation />
                                )}
                            </div>
                        </div>

                <div className='detail-timeline-content'>
                    <div className='detail-timeline-label'>
                        {t(`timeline:${step.label}`)}
                    </div>

                    <div className='detail-timeline-description'>
                        {
                            getTimelineDescription(
                                step.id,
                                candidate,
                                t
                        )}
                    </div>
                </div>

                <div className='detail-timeline-time'>
                        {
                            getTimelineTime(
                                step.id,
                                candidate,
                                t
                            )
                        }
                </div>
            </div>
            ))}
        </div>
            <div className='detail-timeline-divider'></div>
            <div className='detail-timeline-note'>
                <Badge
                    label={t('timeline:complete')}
                    startIcon={<FaCheckCircle />}
                    className={'detail-timeline-item complete'}
                />
                <Badge
                    label={t('timeline:active')}
                    startIcon={<FaCircleDot/>}
                    className={'detail-timeline-item active'}
                />
                <Badge
                    label={t('timeline:pending')}
                    startIcon={<FaCircle/>}
                    className={'detail-timeline-item pending'}
                />
                <Badge
                    label={t('timeline:rejected')}
                    startIcon={<FaCircleXmark/>}
                    className={'detail-timeline-item rejected'}
                />
                <div className='detail-timeline-note-child'>
                    <Badge
                        label={t('timeline:warning')}
                        startIcon={<FaCircleExclamation/>}
                        className={'detail-timeline-item warning'}
                    />
                </div>
            </div>

            <div className='detail-timeline-note-description'>
                {t('timeline:timelineNote')}
            </div>
        </div>
    )
}