import './Select.css';

function Select({
    label,
    value,
    onChange,
    options = [],
    disabled = false,
    className,
    startIcon,
    endIcon,
    variant,
    placeholder
}) {
    const classNameSelect = `
        select-group group-${className}`
    return (
        <div className={classNameSelect}>
            {label && (
                <label className="select-label">
                    {label}
                </label>
            )}

            <div className="select-wrapper">
                {startIcon && (
                    <span className={`select-start-icon ${variant}`}>
                        {startIcon}
                    </span>
                )}

                <select
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    disabled={disabled}
                    className={`select-field  
                        ${startIcon ? 'has-start-icon' : ''}
                        ${endIcon ? 'has-end-icon' : ''} 
                        ${className}`}
                >
                    {options.map(option => (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>

                {endIcon && (
                    <span className={`select-end-icon ${variant}`}>
                        {endIcon}
                    </span>
                )}
            </div>
        </div>
    );
}

export default Select;