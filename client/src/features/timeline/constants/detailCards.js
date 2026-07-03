import DetailConsultationCard from "../../../components/layout/PageDetail/DetailTabble/DetailConsultationCard/DetailConsultationCard";
import DetailDocumentCard from "../../../components/layout/PageDetail/DetailTabble/DetailDocumentCard/DetailDocumentCard";
import DetailResultCard from "../../../components/layout/PageDetail/DetailTabble/DetailResultCard/DetailResultCard";
import DetailStatusCard from "../../../components/layout/PageDetail/DetailTabble/DetailStatus/DetailStatusCard";
import EditConsultationModal from "../../../components/layout/PageDetail/Modals/EditConsultationModal/EditConsultationModal";
import EditDocumentModal from "../../../components/layout/PageDetail/Modals/EditDocumentModal/EditDocumentModal";
import EditExamModal from "../../../components/layout/PageDetail/Modals/EditExamModal/EditExamModal";
import EditStatusModal from "../../../components/layout/PageDetail/Modals/EditStatusModal/EditStatusModal";
import { DETAIL_MODAL_TYPES } from "./detailModalTypes";

export const DETAIL_CARDS = {
    consulting:{
        component: DetailConsultationCard,
        editModal: EditConsultationModal,
        modalType: DETAIL_MODAL_TYPES.CONSULTING
    },
    profile:{
        component: DetailDocumentCard,
        editModal: EditDocumentModal,
        modalType: DETAIL_MODAL_TYPES.DOCUMENT
    },
    exam:{
        component: DetailResultCard,
        editModal: EditExamModal,
        modalType: DETAIL_MODAL_TYPES.RESULT
    },
    result:{
        component: DetailResultCard ,
        editModal: EditExamModal,
        modalType: DETAIL_MODAL_TYPES.RESULT
    },
}