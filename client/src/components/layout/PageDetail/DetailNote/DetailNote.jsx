import './DetailNote.css';
import { useTranslation } from 'react-i18next';
import { formatDate } from '../../../../utils/formatDate';

export default function DetailNote({candidate}){
    const {t} = useTranslation('');
    return(
        <div className='detail-note'>
            {t('common:lastUpdatedBy')} {candidate?.update?.updatedBy.name} - {formatDate(candidate?.update?.updatedAt)}
        </div>
    )
}