import './DetailControl.css';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { MdKeyboardArrowUp } from "react-icons/md";
import Button from '../../../../common/Button/Button';

import { LuCalendarCheck } from "react-icons/lu";
import { LuCalendarClock } from "react-icons/lu";
import { IoCreateOutline } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";

export default function DetailControl({
    
}){
    const {t} = useTranslation('');
    return(
        <div className='detail-control-content'>
            <Button
                label={t('candidateToolbar:confirmTimeConsultation')}
                icon={<LuCalendarCheck/>}
                className='btn-detail-control-confirm'
            />
            <Button
                label={t('candidateToolbar:confirmTimeApplication')}
                icon={<LuCalendarCheck/>}
                className='btn-detail-control-confirm'
            />
            {/* <Button
                label={t('candidateToolbar:confirmTimeExam')}
                icon={<LuCalendarCheck/>}
                className='btn-detail-control-confirm'
            /> */}
            <Button
                label={t('candidateToolbar:setPlan')}
                icon={<LuCalendarClock/>}
                className='btn-detail-control-confirm'
            />
            <Button
                label={t('candidateToolbar:addNote')}
                icon={<IoCreateOutline/>}
                className='btn-detail-control-confirm'
            />
            {/* <Button
                label={t('common:other')}
                icon={<IoIosMore/>}
                className='btn-detail-control-confirm'
            /> */}
        </div>
    )
}
