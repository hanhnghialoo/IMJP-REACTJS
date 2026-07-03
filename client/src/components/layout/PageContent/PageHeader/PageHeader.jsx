import './PageHeader.css';
import { useTranslation } from 'react-i18next';

function PageHeader(){
    const {t} = useTranslation('candidateToolbar')
    return(
        <div className='content-title'>
            {t('candidateToolbar:candidateList')}
        </div>
    )
}

export default PageHeader;