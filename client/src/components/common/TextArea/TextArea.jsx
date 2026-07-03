import './TextArea.css';

function TextArea({
    label,
    type='text',
    placeholder,
    startIcon,
    endIcon,
    onChange,
    disabled = false,
    value='',
    className='',
    variant
})  {
    const classNameTextArea = `text-area-field ${className}`
    return(
        <div className='text-area-group'>
            {label && (
                <label className='text-area-label'>
                    {label}           
                </label>
            )}

            <div className='text-area-wrapper'>
                {startIcon && (
                    <span className={`text-area-start-icon ${variant}`}>
                        {startIcon}
                    </span>
                )}

                <textarea
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={classNameTextArea}
                />

                {endIcon && (
                    <span className='text-area-end-icon'>
                        {endIcon}
                    </span>
                )}
            </div>
        </div>

    )
}

export default TextArea;