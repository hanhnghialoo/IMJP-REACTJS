import './EditConsultationModal.css';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import hasChanges from '../../../../../utils/Modal/hasChanges';

import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import TextArea from '../../../../common/TextArea/TextArea';
import EligibilitySelect from '../../../../../features/candidate/component/Eligibility/component/EligibilitySelect';

import { FaRegCircleXmark } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";

export default function EditConsultationModal({
    candidate,
    onClose
}
){
    const {t} = useTranslation();

    const [initialData, setInitialData] = useState(null);
    const [formData, setFormData] = useState(null);
    const isDirty = hasChanges(initialData,formData);
    const handleInputChange = (field) => (e) => {
        setFormData( prev => (
            {
                ...prev,
                [field]: e.target.value
            }
        ))
    }
    useEffect(()=>{
        const data = {
            consultationDate: candidate?.consultation?.consultationDate || '',
            preference: candidate?.consultation?.preference || '',
            note: candidate?.consultation?.note || '',
            personalCharacteristics: candidate?.consultation?.personalCharacteristics || '',
            eligibility: candidate?.eligibility?.eligibility || '',
            reason: candidate?.eligibility?.reason || '',
        };
        setInitialData(data);
        setFormData(data);
    }, [candidate]);
    return (
        <div className='modal-edit-card'>
            <div className='modal-edit-content consultation'>

                <div className='modal-edit-header'>
                    <div className='modal-edit-title'>
                    {t('modalEdit:editConsulting')}
                    </div>
                    <Button
                        icon={<FaRegCircleXmark/>}
                        onClick={onClose}
                        className='btn-close-modal-edit'
                    />
                </div>

                <div className='modal-edit-divider'></div>

                <div className='modal-edit-middle'>
                    <Input
                        label={t('candidate:lastConsultation')}
                        value={formData?.consultationDate}
                        onChange={handleInputChange('consultationDate')}
                        startIcon={<BsCalendar2DateFill/>}
                        className='modal consultation-date'
                        variant='primary'
                        type='date'
                    />
                    <TextArea
                        label={t('candidate:preference')}
                        value={formData?.preference}
                        className='text-area-preference'
                        onChange={handleInputChange('preference')}
                        variant='primary'
                    />
                    <TextArea
                        label={t('candidate:note')}
                        value={formData?.note}
                        className='text-area-note'
                        onChange={handleInputChange('note')}
                    />
                    <TextArea
                        label={t('candidate:personalCharacteristics')}
                        value={formData?.personalCharacteristics}
                        className='text-area-personal-characteristics'
                        onChange={handleInputChange('personalCharacteristics')}
                    />
                    <EligibilitySelect
                        label={t('candidate:eligibility')}
                        value={formData?.eligibility}
                        onChange={(value)=> setFormData(prev=>({
                            ...prev,
                            eligibility:value
                        }))}
                    />
                    <TextArea
                        label={t('candidate:reason')}
                        value={formData?.reason}
                        className='text-area-reason'
                        onChange={handleInputChange('reason')}
                    />
                </div>

                <div className='modal-edit-bottom'>
                    <Button
                        label={t('common:cancel')}
                        variant='danger'
                        className='cancel-modal'
                        onClick={onClose}
                    />
                    <Button
                        label={t('common:save')}
                        variant='primary'
                        icon={<FaSave/>}
                        disabled={!isDirty}
                        className='save-modal'
                    />
                </div>

            </div>
        </div>
    )
}