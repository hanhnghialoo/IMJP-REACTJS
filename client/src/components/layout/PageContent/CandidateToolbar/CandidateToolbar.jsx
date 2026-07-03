import './CandidateToolbar.css';

import Input from '../../../common/Input/Input';
import Button from '../../../common/Button/Button';

import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoCreateSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";


import { useTranslation } from 'react-i18next';
import usePermission from '../../../../features/auth/hook/usePermission';

function CandidateToolbar({
    onCreateCandidate,
    onSearchCandidate
}){
    const {t} = useTranslation('candidateToolbar');
    const {canCreateCandidate} = usePermission();
    return(
        <div className='candidate-toolbar-content'>
            <Input
                placeholder={t('candidateToolbar:searchBy')}
                startIcon={<CiSearch/>}
                className='candidate-toolbar search'
            />
                <Button
                    label={t('candidateToolbar:search')}
                    icon={<IoSearch/>}
                    className='btn-search-candidate'
                    variant='primary'
                    onClick={onSearchCandidate}
                />
            {canCreateCandidate && 
                <Button
                    label={t('candidateToolbar:addCandidate')}
                    icon={<IoCreateSharp/>}
                    className='btn-add-new-candidate'
                    variant='primary'
                    onClick={onCreateCandidate}
                />
            }

        </div>
    )
}

export default CandidateToolbar;