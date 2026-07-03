import './TextButton.css'

function TextButton(
    {
        className='',
        onClick,
        label,
        icon,
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

        {icon && (
            <span className='text-btn-icon'>
                {icon}
            </span>
        )}

        {label}
        </button>
    )
}

export default TextButton;