import './CandidateSource.css';

import { CHANNEL_CONFIG } from '../../../../../../assets/icon/configs/channelConfigs';
import Badge from '../../../../../common/Badge/Badge';
import { useTranslation } from 'react-i18next';


function CandidateSource({candidate}){
    const {t}= useTranslation('sourceChannel')
    const sourceData = CHANNEL_CONFIG[candidate.sourceChannel];
    if(!sourceData){
        return(
            <Badge
                label={t('common:empty')}
                className='candidate-source-empty'
            />
        );
    }
    const IconBadge = sourceData.icon;

    return(
        <div className='candidate-source'  data-tooltip={t(`${sourceData.label}`)}>
            {candidate.sourceChannel !== ''?
                <Badge
                    // label={t(`${sourceData.label}`)}
                    startIcon={<IconBadge width='auto' height={40}/>}
                    className={'candidate-source'}
                />
                :
                <Badge
                    label={t('common:empty')}
                    className='candidate-source-empty'
                />
            }
        </div>
    )
}

export default CandidateSource;