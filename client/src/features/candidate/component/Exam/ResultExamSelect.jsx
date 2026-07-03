import './ResultExamSelect.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { RESULT_EXAM_OPTIONS } from './ResultExamOptions';

import { MdKeyboardArrowDown } from 'react-icons/md';

function ResultExamSelect({
    value,
    onChange,
    label
}){
    const {t} = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const selected = RESULT_EXAM_OPTIONS.find(item=>item.value === value)|| RESULT_EXAM_OPTIONS[0];
    const SelectedIcon = selected.icon;
    return(
        <div className='exam-select'>
            {label && (
                <label className='exam-label'>
                    {label}
                </label>
            )}
        
            <div
                className={`exam-trigger ${selected.className}`}
                onClick={()=>setIsOpen(prev=>!prev)}
            >
                <div className='exam-selected'>
                    <SelectedIcon/>
                    <span>
                        {t(selected.labelKey)}
                    </span>
                </div>
                <MdKeyboardArrowDown/>
            </div>

            {isOpen && (
                <div className='exam-dropdown'>
                    {RESULT_EXAM_OPTIONS.map(option=>{
                        const Icon = option.icon;
                            return(
                                <div
                                    key={option.value}
                                    className={`exam-option ${option.className}`}
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

export default ResultExamSelect;