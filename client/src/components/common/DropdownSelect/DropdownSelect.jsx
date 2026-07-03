import './DropdownSelect.css';

import {useState, useRef, useEffect} from 'react'

function DropdownSelect({
    className,
    label,
    trigger,
    notTrigger,
    options = [],
    onSelect
}) {
    const dropdownRef = useRef(null);
    const classNameDropdown = className;
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
        function handleClickOutside(e){
            if (
                dropdownRef.current && !dropdownRef.current.contains(e.target))
                {
                    setIsOpen(false);
                }
        }
        document.addEventListener(
            'mousedown',
            handleClickOutside
        );

            return(
                ()=> {
                    document.removeEventListener(
                        'mousedown',
                        handleClickOutside
                    )
                }
            );

        }, []);

    return(
        <div className={`dropdown-select-menu ${classNameDropdown}`} ref={dropdownRef}>
            <div
                className='dropdown-select-trigger'
                onClick={()=>setIsOpen(prev=>!prev)}
            >
                <label className='dropdown-select-label'>{label}</label>
                {trigger(isOpen)}
            </div>

            {isOpen && (
                <div className={`dropdown-select-content ${isOpen ? 'open' : ''}`}>
                    {options.map((option, index)=>(
                        <div
                            key={index}
                            className='dropdown-select-item'
                            onClick={() => {
                                option.onClick?.();
                                onSelect?.(option.value);
                                setIsOpen(false);
                            }}
                        >
                            {option.content}
                        </div> 
                    ))}
                </div>
            )}
                
        </div>
    )
}

export default DropdownSelect;