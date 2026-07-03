import './DetailSourceCard.css';

import Badge from '../../../../common/Badge/Badge';
import { CHANNEL_CONFIG } from '../../../../../assets/icon/configs/channelConfigs';
import Button from '../../../../common/Button/Button';

import usePermission from '../../../../../features/auth/hook/usePermission';
import { useTranslation } from 'react-i18next';
import { useState, useEffect} from 'react';

import DropdownSelect from '../../../../common/DropdownSelect/DropdownSelect';
import { SOURCE_OPTIONS } from '../../../../../features/sourceCandidate/sourceOptions';
import { RiEdit2Fill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

export default function DetailSourceCard({
    candidate,
}){
    const {t} = useTranslation('candidate');
    const [editSource, setEditSource] = useState(false);
    const [currentSource, setCurrentSource]= useState(candidate?.sourceChannel);
    const {canEditCandidate} = usePermission();
    useEffect(() => {
        setCurrentSource(candidate?.sourceChannel);
    }, [candidate?.sourceChannel]);
    
    const handleChangeSource = (source) => {
        setCurrentSource(source);
        setEditSource(true);
    };
    const handleSaveSource = () => {
        setEditSource(false);
    }
    const handleCancelSource = () => {
        setEditSource(false);
        setCurrentSource(candidate?.sourceChannel)
    }
    const sourceData = CHANNEL_CONFIG[currentSource];
    if(!sourceData){
        return null;
    }
    const IconBadge = sourceData.icon;
    const handleClickEdit = () => {
        setEditSource(prev => !prev)
    }
    const buildSource = () =>
        SOURCE_OPTIONS.map(option => {
            const Icon = option.icon;
            return {
                value: option.value,
                content: (
                    <Badge
                        label={t(option.label)}
                        startIcon={
                            <Icon
                                width='auto'
                                height={20}
                            />
                        }
                        className={'option-select-source'}
                    />
                ),
                onClick: () => handleChangeSource(option.value),
            };
        });
    
    return(
        <div className='detail-source-card'>

            <div className='detail-item-card source'>
                <span className='detail-label-card'>
                    {t('candidate:sourceChannel')}
                </span>
                <span className='detail-separator-card'>:</span>
                <span className='detail-value-card source'>
                    {!editSource
                        ?
                        <Badge
                            label={t(`${sourceData.label}`)}
                            startIcon={<IconBadge width='auto' height={40}/>}
                            className={'candidate-source'}
                        />
                        :
                        (
                            <DropdownSelect
                                trigger={() => (
                                    <Badge
                                        label={t(sourceData.label)}
                                        startIcon={<IconBadge width="auto" height={40} />}
                                        className="candidate-source-input"
                                        endIcon={<MdKeyboardArrowDown/>}
                                    />
                                )}
                                options={buildSource()}
                            />
                        )
                    }
                </span>
            
            </div>
            { (canEditCandidate && !editSource) ?
                <Button
                    icon={<RiEdit2Fill/>}
                    className={`btn-edit-candidate source ${editSource?'active':''}`}
                    onClick={handleClickEdit}
                />
                : (canEditCandidate && editSource) &&
                <div className='button-control-group'> 
                    <Button
                        icon={<FaSave/>}
                        className={`btn-save-source`}
                        onClick={handleSaveSource}
                    />
                    <Button
                        icon={<MdCancel/>}
                        className={`btn-cancel-source`}
                        onClick={handleCancelSource}
                    />
                </div>
            }

        </div>
    )
}