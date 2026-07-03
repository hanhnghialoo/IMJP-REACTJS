import './Checkbox.css'

function Checkbox({
    id,
    name,
    checked = false,
    label,
    disabled = false,
    className = '',
    onChange,
}){
    return(
        <div className={`checkbox-group ${className}`}>
            <label
                className={`checkbox-label ${disabled?'disabled':''}`}
            >
                <input
                    id={id}
                    name={name}
                    type='checkbox'
                    checked={checked}
                    disabled={disabled}
                    onChange={onChange}
                    className='checkbox-input'
                />

                {label && (
                    <span className='checkbox-test'>
                        {label}
                    </span>
                )}
            </label>
        </div>
    )
}

export default Checkbox;