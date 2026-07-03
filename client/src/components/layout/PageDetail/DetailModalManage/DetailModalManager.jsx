import './DetailModalManager.css';

import { DETAIL_MODAL_TYPES } from '../../../../features/timeline/constants/detailModalTypes';
import EditInfoModal from '../Modals/EditInfoModal/EditInfoModal';
import EditContactModal from '../Modals/EditContactModal/EditContactModal';
import EditConsultationModal from '../Modals/EditConsultationModal/EditConsultationModal';
import EditDocumentModal from '../Modals/EditDocumentModal/EditDocumentModal';
import EditExamModal from '../Modals/EditExamModal/EditExamModal';

function DetailModalManager({
    activeModal,
    candidate,
    onClose,
}){
    switch(activeModal){
        case DETAIL_MODAL_TYPES.INFO:
            return (
                <EditInfoModal
                    candidate={candidate}
                    onClose={onClose}
                />     
            );
        case DETAIL_MODAL_TYPES.CONTACT:
            return (
                <EditContactModal
                    candidate={candidate}
                    onClose={onClose}
                />
            );
        case DETAIL_MODAL_TYPES.CONSULTING:
            return (
                <EditConsultationModal
                    candidate={candidate}
                    onClose={onClose}
                />
            )
        case DETAIL_MODAL_TYPES.DOCUMENT:
            return (
                <EditDocumentModal
                    candidate={candidate}
                    onClose={onClose}
                />
            )
        case DETAIL_MODAL_TYPES.RESULT:
            return (
                <EditExamModal
                    candidate={candidate}
                    onClose={onClose}
                />
            )   
    

            default:
                return null;
    }
}

export default DetailModalManager;