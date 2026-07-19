import './MetaInfo.css';

import Badge from '../../../../../../common/Badge/Badge';
import { getNameProvince } from '../../../../../../../features/timeline/utils/getNameProvince';

import { IoMale, IoFemale } from "react-icons/io5";
import { formatDateOfBirth } from '../../../../../../../utils/formatDateOfBirth';


export default function MetaInfo({candidate}){
    return(
        <div className='candidate-meta-info'>
            <Badge
                startIcon={candidate?.info.gender==='male'?<IoMale/>:<IoFemale/>}
                variant={candidate?.info.gender==='male'?'primary':'danger'}
                className={'gender'}
            />
            <Badge
                label={formatDateOfBirth(candidate?.info.dateOfBirth)}
                className={'dateOfBirth'}
            />
            <Badge
                label={`- ${getNameProvince(candidate?.contact.newHomeTown)}`}
                className={'homeTown'}
            />
        </div>
    )

    
}

