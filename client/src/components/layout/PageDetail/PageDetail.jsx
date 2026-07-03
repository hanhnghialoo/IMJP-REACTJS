import './PageDetail.css';

import DetailHeader from './DetailHeader/DetailHeader';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCandidates } from '../../../features/candidate/hook/useCandidates';
import DetailToolbar from './DetailToolbar/DetailToolbar';
import DetailNote from './DetailNote/DetailNote';
import DetailInfoCard from './DetailTabble/DetailInfoCard/DetailInfoCard';
import DetailContactCard from './DetailTabble/DetailContactCard/DetailContactCard';
import DetailSourceCard from './DetailTabble/DetailSourceCard/DetailSourceCard';

import DetailTimelineCard from './DetailTabble/DetailTimelineCard/DetailTimelineCard';

import { DETAIL_CARDS } from '../../../features/timeline/constants/detailCards';
import { DETAIL_MODAL_TYPES } from '../../../features/timeline/constants/detailModalTypes';
import DetailModalManager from './DetailModalManage/DetailModalManager';


function PageDetail(){
    const [ activeModal, setActiveModal] = useState(null);
    const [activeCard, setActiveCard] = useState(null);
    const {id} = useParams();
    const handleOpenModal = (modalType) => {
        setActiveModal(modalType);
    };
    const handleCloseModal = () => {
        setActiveModal(null);
    };

    const {
        candidate,
        loadCandidateById
    } = useCandidates();
    useEffect(()=>{
        loadCandidateById(id);
    },[id]);
    useEffect(() => {
        if (
            !activeCard &&
            candidate?.timeline?.currentStep
        ) {
            setActiveCard(
                candidate.timeline.currentStep
            );
        }
    }, [candidate, activeCard]);
    const activeCardConfig = DETAIL_CARDS[activeCard]
    const ActiveCard = activeCardConfig?.component;
    const modalType = activeCardConfig?.modalType;
    return(
        <div className='detail-body'>
            <div className='detail-content'>
                <div className='top-detail-content'>
                    <DetailHeader
                        candidate={candidate}
                    />
                    <DetailToolbar
                        candidate={candidate}
                    />
                </div>

                <div className='mid-detail-content'>
                   <div className='mid-left-detail-content'>
                        <DetailInfoCard
                            candidate={candidate}
                            onEdit = {()=>
                                handleOpenModal(DETAIL_MODAL_TYPES.INFO)
                            }
                            isActive = {
                                activeModal===DETAIL_MODAL_TYPES.INFO
                            }
                        />
                        <DetailContactCard
                            candidate={candidate}
                            onEdit = {()=> 
                                handleOpenModal(DETAIL_MODAL_TYPES.CONTACT)
                            }
                            isActive = {
                                activeModal===DETAIL_MODAL_TYPES.CONTACT
                            }
                        />
                        <DetailSourceCard
                            candidate={candidate}
                        />
                   </div>

                   <div className='mid-center-detail-content'>
                        <div 
                            className='mid-center-detail-container'
                            key={activeCard}
                        >
                            {ActiveCard &&
                                <ActiveCard
                                    candidate={candidate}
                                    onEdit={()=> handleOpenModal(modalType)}
                                    isActive = {
                                        activeModal===modalType
                                    }
                                />
                            }
                        </div> 
                   </div>

                   <div className='mid-right-detail-content'>
                        <DetailTimelineCard
                            candidate={candidate}
                            activeCard={activeCard}
                            onCardChange={setActiveCard}
                        />
                       
                   </div>
                </div>

                <div className='bottom-detail-content'>
                    <DetailNote
                        candidate={candidate}
                    />
                </div>
                
            </div>

            <DetailModalManager
                activeModal={activeModal}
                candidate={candidate}
                onClose={handleCloseModal}
            />                
        </div>
    )
}

export default PageDetail;