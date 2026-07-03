import './FullName.css';
import { calculateAge } from '../../../../../../../utils/calculateAge';

export default function FullName({candidate}) {
    return(
        <div className='candidate-fullname'>
            {candidate.info.fullName}
            <span className='candidate-age'> ({calculateAge(candidate.info.dateOfBirth)})</span>
        </div>
    )
}