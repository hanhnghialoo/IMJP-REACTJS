import './EligibilitySelect.css';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { ELIGIBILITY_OPTIONS } from '../eligibilityOptions';


function EligibilitySelect({
    value,
    onChange,
    label
}) {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const selected =
        ELIGIBILITY_OPTIONS.find(
            item => item.value === value
        ) || ELIGIBILITY_OPTIONS[0];

    const SelectedIcon = selected.icon;
    
    return (
        <div className="eligibility-select">
            {label && (
                <label className="eligibility-label">
                    {label}
                </label>
            )}

            <div
                className={`eligibility-trigger ${selected.className}`}
                onClick={() => setIsOpen(prev => !prev)}
            >
                <div className="eligibility-selected">
                    <SelectedIcon />
                    <span>
                        {t(selected.labelKey)}
                    </span>
                </div>

                <MdKeyboardArrowDown />
            </div>

            {isOpen && (
                <div className="eligibility-dropdown">
                    {ELIGIBILITY_OPTIONS.map(option => {
                        const Icon = option.icon;

                        return (
                            <div
                                key={option.value}
                                className={`eligibility-option ${option.className}`}
                                onClick={() => {
                                    onChange(option.value);
                                    setIsOpen(false);
                                }}
                            >
                                <Icon />
                                <span>
                                    {t(option.labelKey)}
                                </span>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default EligibilitySelect;