import './DetailHeader.css';

import TextButton from '../../../common/Button/TextButton';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { IoArrowUndoCircleSharp } from "react-icons/io5";

function DetailHeader({candidate}){
    const {t}= useTranslation('candidateToolbar');
    const navigate = useNavigate();
    const handleClickBack=()=>{
        navigate('/candidates');
    }
    return(
        <div className='detail-title'>
            <TextButton
                label={t('candidateToolbar:candidateList')}
                icon={<IoArrowUndoCircleSharp/>}
                className='text-title-detail'
                onClick={()=>handleClickBack()}
            />
            <span>&nbsp;/&nbsp;</span>
            <span className='detail-header-name-candidate'>{candidate?.info.fullName}</span>
        </div>
    )
}
export default DetailHeader;