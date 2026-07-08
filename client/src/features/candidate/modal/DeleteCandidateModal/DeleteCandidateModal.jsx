import './DeleteCandidateModal.css';

import { useTranslation } from 'react-i18next';

import { FaRegCircleXmark } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

import { useState } from 'react';

import Button from '../../../../components/common/Button/Button';
import Checkbox from '../../../../components/common/Checkbox/Checkbox';

export default function DeleteCandidateModal({
    onCloseDeleteCandidateModal,
    candidate
}){
    const {t} = useTranslation('');
    const [isChecked, setIsChecked] = useState(false);
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
                        disabled={!isChecked}
                    />
                </div>
            </div>

        </div>
    )
}