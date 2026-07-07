import './CandidateSource.css';

import { CHANNEL_CONFIG } from '../../../../../../assets/icon/configs/channelConfigs';
import Badge from '../../../../../common/Badge/Badge';
import { useTranslation } from 'react-i18next';


function CandidateSource({candidate}){
    const {t}= useTranslation('sourceChannel')
    const sourceData = CHANNEL_CONFIG[candidate.sourceChannel];
    if(!sourceData){
        return null;
    }
    const IconBadge = sourceData.icon;

    return(
        <div className='candidate-source'  data-tooltip={t(`${sourceData.label}`)}>
            <Badge
                // label={t(`${sourceData.label}`)}
                startIcon={<IconBadge width='auto' height={40}/>}
                className={'candidate-source'}
            />
        </div>
    )
}

export default CandidateSource;