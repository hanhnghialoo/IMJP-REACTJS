import './FloatingRadio.css';
import { useTranslation } from 'react-i18next';

export default function FloatingRadio({
    options=[],
    value,
    onChange,
    disabled = false,
    name,
    className
}){
    const {t} = useTranslation();
    const classNameRadio = `floating-radio-button ${className}`
    return(
        <div className='floating-radio'>
            {options.map((item)=> {
                const Icon = item.icon;
                return(
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
                        {Icon && (
                            <span className={`floating-radio-icon ${item.className || ''}`}>
                                <Icon/>
                            </span>
                        )}
                        <span>{t(item.labelKey)}</span>
                    </button>
                )})}
        </div>
    )
}