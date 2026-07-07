import './TextButton.css'

function TextButton(
    {
        className='',
        onClick,
        label,
        startIcon,
        endIcon,
        disabled=false,
    }
){
    return (
        <button
        type='button'
        onClick={onClick}
        className={`text-btn ${className}`}
        disabled={disabled}
        > 

        {startIcon && (
            <span className='text-btn-start-icon'>
                {startIcon}
            </span>
        )}
            
        {label}

        {endIcon && (
            <span className='text-btn-end-icon'>
                {endIcon}
            </span>
        )}
        </button>
    )
}

export default TextButton;