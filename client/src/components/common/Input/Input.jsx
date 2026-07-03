import './Input.css';
function Input({
    label,
    type='text',
    placeholder,
    startIcon,
    endIcon,
    onChange,
    disabled = false,
    value='',
    className='',
    variant,
    error,
    onBlur,
    ref
})  {
    const classNameInput = `
        input-field
        input-${className}
        ${startIcon ? 'has-start-icon' : ''}
        ${endIcon ? 'has-end-icon' : ''}
        ${error ? 'input-error' : ''} 
        `
    return(
        <div className='input-group'>
            {label && (
                <label className='input-label'>
                    {label}           
                </label>
            )}

            <div className='input-wrapper'>
                {startIcon && (
                    <span className={`input-start-icon ${variant}`}>
                        {startIcon}
                    </span>
                )}

                <input
                    ref={ref}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    disabled={disabled}
                    className={classNameInput}
                    onBlur={onBlur}
                />

                {endIcon && (
                    <span className={`input-end-icon ${variant}`}>
                        {endIcon}
                    </span>
                )}
            </div>

            {error && (
                <span className='input-error-message'>
                    {error}
                </span>
            )}
        </div>

    )
}

export default Input;