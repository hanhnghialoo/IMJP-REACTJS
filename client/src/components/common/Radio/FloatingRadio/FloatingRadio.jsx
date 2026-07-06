import './FloatingRadio.css';

export default function FloatingRadio({
    options=[],
    value,
    onChange,
    disabled = false,
    name,
    className
}){
    const classNameRadio = `floating-radio-button ${className}`
    return(
        <div className='floating-radio'>
            {options.map((item)=> (
                <button
                    key={item.value}
                    disabled={disabled}
                    className={`${classNameRadio} ${
                        value === item.value ? 'active' : ''
                    }`}
                    onClick={()=>
                        onChange?.({
                            target: {
                                name,
                                value: item.value,
                            },
                        })
                    }
                >
                    {item.icon && (
                        <span className={`floating-radio-icon ${item.className || ''}`}>
                            {item.icon}
                        </span>
                    )}
                    <span>{item.label}</span>
                </button>
            ))}
        </div>
    )
}