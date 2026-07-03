import './EditDocumentModal.css';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import hasChanges from '../../../../../utils/Modal/hasChanges';

import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import Select from '../../../../common/Select/Select';
import TextArea from '../../../../common/TextArea/TextArea';
import StatusSelect from '../../../../../features/candidate/component/Status/StatusSelect';

import { FaRegCircleXmark } from "react-icons/fa6";
import { IoIosDocument } from "react-icons/io";
import { FaSave } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { BsMailbox2Flag } from "react-icons/bs";
import { FaCalendarCheck } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";


export default function EditDocumentModal({
    candidate,
    onClose
}
){
    const {t} = useTranslation();
    const [initialData, setInitialData] = useState(null);
    const [formData, setFormData] = useState(null);
    useEffect(()=>{
        const data = {
            documentStatus: candidate?.document?.documentStatus || '',
            submissionDate: candidate?.document?.submissionDate || '',
            submissionMethod: candidate?.document?.submissionMethod || '',
            recordedDate: candidate?.document?.recordedDate || '',
            note: candidate?.document.note || '',
            status: candidate?.status.status || '',
            detail: candidate?.status.detail || '',
            noteStatus: candidate?.status.noteStatus || '',
        }
        setInitialData(data);
        setFormData(data);
    },[candidate]);
    const isDirty = hasChanges(initialData, formData);
    const handleInputChange= (field) => (e) => {
        setFormData(prev => ({
            ...prev,
            [field]: e.target.value
        }))
    };

    return (
        <div className='modal-edit-card'>
            <div className='modal-edit-content document'>
                <div className='modal-edit-header'>
                    <div className='modal-edit-title'>
                        {t('modalEdit:editDocument')}
                    </div>
                    <Button
                        icon={<FaRegCircleXmark/>}
                        onClick={onClose}
                        className='btn-close-modal-edit'
                    />
                </div>

                <div className='modal-edit-divider'></div>

                <div className='modal-edit-middle'>
                    <StatusSelect
                        label={t('candidate:status')}
                        value={formData?.status}
                        className={'select-status'}
                        onChange={(value)=> setFormData(prev=>({
                            ...prev,
                            status: value
                        }))}
                    />
                    <Input
                        label={t('common:detail')}
                        value={formData?.detail}
                        startIcon={<BiCommentDetail/>}
                        onChange={handleInputChange('detail')}
                        className='modal detail'
                        variant='primary'
                    />
                    <TextArea
                        label={t('candidate:note')}
                        value={formData?.noteStatus}
                        onChange={handleInputChange('noteStatus')}
                        className='text-area note-status'
                    />
                    <Select
                        label={t('candidate:documentStatus')}
                        value={formData?.documentStatus}
                        onChange={(e)=> setFormData(prev=>({
                            ...prev,
                            documentStatus: e.target.value
                        }))}
                        startIcon={<IoIosDocument/>}
                        endIcon={<MdKeyboardArrowDown/>}
                        variant='primary'
                        className={'select-modal document-status'}
                        options={[
                            {
                                value:'subbmited',
                                label:`${t('common:submitted')}`
                            },
                            {
                                value:'unsubmitted',
                                label:`${t('common:unsubmitted')}`
                            }
                        ]}
                    />
                    <Input
                        label={t('candidate:submissionDate')}
                        value={formData?.submissionDate}
                        type='date'
                        startIcon={<FaCalendar/>}
                        onChange={handleInputChange('submissionDate')}
                        className='modal submission-date'
                        variant='primary'
                    />
                     <Select
                        label={t('candidate:submissionMethod')}
                        value={formData?.submissionMethod}
                        startIcon={<BsMailbox2Flag/>}
                        endIcon={<MdKeyboardArrowDown/>}
                        onChange={handleInputChange('submissionMethod')}
                        className='select-modal submission-method'
                        variant='primary'
                        options={[
                            {
                                value:'postalService',
                                label: t('candidate:postalService')
                            },
                            {
                                value:'esc',
                                label: t('candidate:esc')
                            },
                            {
                                value:'other',
                                label: t('candidate:other')
                            },
                            {
                                value:'',
                                label: t('modalEdit:selectMethod')
                            }
                        ]}
                    />
                    <Input
                        label={t('candidate:recordedDate')}
                        value={formData?.recordedDate}
                        type='date'
                        startIcon={<FaCalendarCheck/>}
                        onChange={handleInputChange('recordedDate')}
                        className='modal submission-date'
                        variant='primary'
                    />
                    <TextArea
                        label={t('candidate:note')}
                        value={formData?.note}
                        onChange={handleInputChange('note')}
                        className='text-area note'
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
