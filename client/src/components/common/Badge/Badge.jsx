import './Badge.css'

function Badge({
    label,
    startIcon,
    endIcon,
    variant='',
    onClick,
    className,
    title,
}){
    const classNameBadge = `
    badge
    ${variant ? `badge-${variant}` : ''}
    ${className ? `badge-${className}`:''}
    `   
    return(
        <div className={classNameBadge} title={title}>
            {startIcon && (
                <span className='badge-start-icon'>
                    {startIcon}
                </span>
            )}

            <span className='badge-label'>
                {label}
            </span>

            {endIcon && (
                <span className='badge-end-icon'>
                    {endIcon}
                </span>
            )}
        </div>
    )
}

export default Badge;