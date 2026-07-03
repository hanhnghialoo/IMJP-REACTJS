import './EditExamModal.css';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

import hasChanges from '../../../../../utils/Modal/hasChanges';

import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import ResultExamSelect from '../../../../../features/candidate/component/Exam/ResultExamSelect';
import TextArea from '../../../../common/TextArea/TextArea';

import { FaRegCircleXmark } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { BiNotepad } from "react-icons/bi";

export default function EditExamModal({
    candidate,
    onClose
}){
    const {t} = useTranslation();
    const [initialData, setInitialData] = useState(null);
    const [formData, setFormData] = useState(null);
    const isDirty = hasChanges(initialData,formData);
    const handleInputChange = (field) => (e) => {
        setFormData(prev => ({
            ...prev,
            [field]: e.target.value
        }))
    }
    useEffect(()=>{
        const data = {
            result: candidate?.result?.result || '',
            reason: candidate?.result?.reason || '',
            noteResult: candidate?.result?.noteResult || '',
            resultedDate: candidate?.result?.resultedDate || '',
            batchCode: candidate?.result?.batchCode || '',
        }
        setInitialData(data);
        setFormData(data)
    }, [candidate]);
    return(
        <div className='modal-edit-card'>
            <div className='modal-edit-content exam'>
                <div className='modal-edit-header'>
                    <div className='modal-edit-title'>
                        {t('modalEdit:editExam')}
                    </div>
                    <Button
                        icon={<FaRegCircleXmark/>}
                        onClick={onClose}
                        className='btn-close-modal-edit'
                    />
                </div>

                <div className='modal-edit-divider'></div>

                <div className='modal-edit-middle'>
                    <ResultExamSelect
                        label={t('candidate:status')}
                        value={formData?.result}
                        onChange={(value)=>setFormData(prev=>({
                            ...prev,
                            result: value
                        }))}
                        className={'select-exam'}
                    />
                    <TextArea
                        label={t('candidate:reason')}
                        value={formData?.reason}
                        onChange={handleInputChange('reason')}
                        className='exam-reason'
                    />
                    <TextArea
                        label={t('candidate:note')}
                        value={formData?.noteResult}
                        onChange={handleInputChange('noteResult')}
                        className='exam-note'

                    />
                    <Input
                        label={t('candidate:recordedDate')}
                        value={formData?.recordedDate}
                        startIcon={<MdDateRange/>}
                        type='date'
                        endIcon={<MdKeyboardArrowDown/>}
                        onChange={handleInputChange('recordedDate')}
                        className='modal recorded-date'
                        variant='primary'
                    />
                    <Input
                        label={t('candidate:batchCode')}
                        value={formData?.batchCode}
                        startIcon={<BiNotepad/>}
                        onChange={handleInputChange('batchCode')}
                        className='modal batch-code'
                        variant='primary'
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