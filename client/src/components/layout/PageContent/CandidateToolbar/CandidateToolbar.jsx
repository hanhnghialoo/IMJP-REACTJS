import './CandidateToolbar.css';

import Input from '../../../common/Input/Input';
import Button from '../../../common/Button/Button';

import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoCreateSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoFilterSharp } from "react-icons/io5";



import { useTranslation } from 'react-i18next';
import usePermission from '../../../../features/auth/hook/usePermission';
import useDebounce from '../../../../hooks/useDebounce';
import { useEffect, useRef } from 'react';

function CandidateToolbar({
    onCreateCandidate,
    onSearchCandidate,
    handleChangeSearchQuery,
    searchQuery,
    onOpenQuickFilter,
    isOpenQuickFilter
}){
    const {t} = useTranslation('candidateToolbar');
    const {canCreateCandidate} = usePermission();

    return(
        <div className='candidate-toolbar-content'>
            <Button
                label={t('candidateToolbar:quickFilter')}
                variant='primary-xs'
                icon={<IoFilterSharp/>}
                className={`btn-quick-filter-candidate ${isOpenQuickFilter ? 'active' : ''}`}
                onClick={onOpenQuickFilter}
            />
            <Input
                value={searchQuery}
                placeholder={t('candidateToolbar:searchBy')}
                startIcon={<CiSearch/>}
                className='candidate-toolbar search'
                onChange={(e)=>handleChangeSearchQuery(e.target.value)}
            />
                <Button
                    label={t('candidateToolbar:searchAdvance')}
                    icon={<IoSearch/>}
                    className={`btn-search-candidate`}
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