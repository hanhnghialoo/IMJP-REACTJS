import './CandidateDetailPage.css'

import TopBar from '../../components/layout/Topbar/Topbar';
import PageDetail from '../../components/layout/PageDetail/PageDetail';

function CandidateDetailPage(){
    return(
        <div className='candidate-detail-page'>
            <TopBar/>
            <PageDetail/>
        </div>
    )
}

export default CandidateDetailPage;