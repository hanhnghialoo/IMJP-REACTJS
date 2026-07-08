import './DetailToolbar.css';

import Button from '../../../common/Button/Button';
import { useTranslation } from 'react-i18next';
import usePermission from '../../../../features/auth/hook/usePermission';
import { useState, useEffect

 } from 'react';

import { MdDelete } from "react-icons/md";
import DetailControl from './DetailControl/DetailControl';
import DeleteCandidateModal from '../../../../features/candidate/modal/DeleteCandidateModal/DeleteCandidateModal';

export default function DetailToolbar({
    candidate
}
){
    const {t} = useTranslation('candidateToolbar');
    const [deleteCandidateModalOpen, setDeleteCandidateModalOpen] = useState(false);
    const { canDeleteCandidate} = usePermission();
    useEffect(()=>{
        const handleKeydown = (event) => {
            if (event.key === 'Escape') {
                setDeleteCandidateModalOpen(false);
            }
        };
        document.addEventListener('keydown', handleKeydown);
        return () => {
            document.removeEventListener('keydown', handleKeydown);
        };
    }, []);
    return(
        <div className='detail-toolbar-content'>
            {canDeleteCandidate &&
                <>
                    <DetailControl
                    
                    />
                    <Button
                        label={t('candidateToolbar:deleteCandidate')}
                        icon={<MdDelete/>}
                        variant='primary'
                        className='btn-detail-toolbar-delete'
                        onClick={()=>setDeleteCandidateModalOpen(true)}
                    />

                    {deleteCandidateModalOpen &&
                        <DeleteCandidateModal
                            onCloseDeleteCandidateModal={()=>setDeleteCandidateModalOpen(false)}
                            candidate={candidate}
                        />
                    }
                </>

            }
        </div>
    )
}