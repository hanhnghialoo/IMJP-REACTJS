import './Button.css'
function Button (
    {
        label,
        icon,
        variant = '',
        disabled = false,
        onClick,
        className='',
    }
){
    const buttonClassName = `btn btn-${variant} ${className}`;
    return (
        <div className='btn-group'>
            <button 
                className={buttonClassName}
                disabled={disabled}
                onClick={onClick}
            >
        
                {icon && (
                    <span className='btn-icon'>
                        {icon}
                    </span>
                )}

                {label}

            </button>
        </div>
        
    )
}

export default Button;