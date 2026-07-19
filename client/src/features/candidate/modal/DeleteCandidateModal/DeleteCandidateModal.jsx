import './DeleteCandidateModal.css';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { FaRegCircleXmark } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

import { useState } from 'react';

import Button from '../../../../components/common/Button/Button';
import Checkbox from '../../../../components/common/Checkbox/Checkbox';
import useDeleteCandidate from '../../hook/useDeleteCandidate';
import useToast from '../../../../components/common/Toast/hook/useToast';

export default function DeleteCandidateModal({
    onCloseDeleteCandidateModal,
    candidate
}){
    const {t} = useTranslation('');
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const {
        isDeleting,
        deleteCandidate,
    } = useDeleteCandidate();
    const {addToast} = useToast();
    async function handleClickDeleteCandidate(){
        const candidateId = candidate?.id;
        if (!candidateId || isDeleting || !isChecked){
            return;
        }
        try {
            await deleteCandidate(candidateId);
            addToast({
                title: t('toast:success'),
                message: t('toast:deletedCandidate'),
                variant: 'success'
            });
            onCloseDeleteCandidateModal?.();
            navigate('/candidates', {
                replace: true,
            });
        } catch(error){
            addToast({
                title: t('toast:error'),
                message: t('toast:messageError'),
                variant: 'error'
            });
        }
    }

    return(
        <div className='modal-delete-candidate-card'>

            <div className='modal-delete-candidate-content'>
                <div className='modal-delete-candidate-header'>
                    <div className='modal-delete-candidate-title'>
                        {t('candidateToolbar:deleteCandidate')}
                    </div>
                    <Button
                        icon={<FaRegCircleXmark/>}
                        className='btn-close-modal-delete-candidate'
                        onClick={onCloseDeleteCandidateModal}
                        disabled={isDeleting}
                    />
                </div>

                <div className='modal-delete-candidate-divider'></div>

                <div className='modal-delete-candidate-middle'>
                    <div className='modal-delete-candidate-message'>
                        {t('candidateToolbar:deleteCandidateMessage')}
                    </div>
                    <div className='modal-delete-candidate-caption'>
                        {t('candidateToolbar:deleteCandidateCaption')}
                    </div>
                    <div className='modal-delete-candidate-detail'>
                        {t('candidate:candidate')}: 
                        <div className='fullname-candidate-delete'>{candidate?.info?.fullName}</div>
                        {t('candidateToolbar:deleteCandidateSpan')}
                    </div>
                    <Checkbox
                        label={t('candidateToolbar:deleteCandidateCheckbox')}
                        className='checkbox-delete-candidate'
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                    />
                </div>

                <div className='modal-delete-candidate-bottom'>
                    <Button
                        label={t('common:cancel')}
                        variant='danger'
                        className='cancel-delete-modal'
                        onClick={onCloseDeleteCandidateModal}
                    />
                    <Button
                        label={t('common:delete')}
                        variant='primary'
                        icon={<MdDelete/>}
                        className='confirm-delete-modal'
                        disabled={!isChecked || isDeleting || !candidate?.id}
                        onClick={handleClickDeleteCandidate}
                    />
                </div>
            </div>

        </div>
    )
}