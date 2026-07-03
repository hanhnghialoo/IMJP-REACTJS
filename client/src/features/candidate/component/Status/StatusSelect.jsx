import './StatusSelect.css';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { STATUS_OPTIONS } from './statusOptions';

function StatusSelect ({
    value,
    onChange,
    label
}){
    const {t} = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const selected = STATUS_OPTIONS.find(item=>item.value === value)|| STATUS_OPTIONS[0];
    const SelectedIcon = selected.icon;

    return(
        <div className='status-select'>
            {label && (
                <label className='status-label'>
                    {label}
                </label>
            )}

            <div
                className={`status-trigger ${selected.className}`}
                onClick={()=>setIsOpen(prev=>!prev)}
            >
                <div className='status-selected'>
                    <SelectedIcon/>
                    <span>
                        {t(selected.labelKey)}
                    </span>
                </div>
                <MdKeyboardArrowDown/>
            </div>

            {isOpen && (
                <div className='status-dropdown'>
                    {STATUS_OPTIONS.map(option=>{
                        const Icon = option.icon;
                        return(
                            <div
                                key={option.value}
                                className={`status-option ${option.className}`}
                                onClick={()=>{
                                    onChange(option.value)
                                    setIsOpen(false);
                                }}
                            >
                                <Icon/>
                                <span>
                                    {t(option.labelKey)}
                                </span>
                            </div>
                        )
                    })}

                </div>
            )}

        </div>
    )
}

export default StatusSelect;