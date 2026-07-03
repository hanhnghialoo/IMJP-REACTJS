import './CandidateInfoCell.css'

import FullName from './FullNameInfo/FullName';
import MetaInfo from './MetaInfo/MetaInfo';

function CandidateInfoCell({
    candidate,
    onClick
}){
    return(
        <div 
            onClick={onClick}
            className='candidate-info-cell'>
                <FullName
                    candidate={candidate}
                />
                <MetaInfo
                    candidate={candidate}
                />
        </div>
    )
}

export default CandidateInfoCell;