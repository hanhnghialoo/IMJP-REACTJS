import './DropdownCommon.css';

import Button from '../Button/Button';
import {useState, useRef, useEffect} from 'react'

function DropdownCommon({
    trigger,
    notTrigger,
    options = [],
    label,
    className
}) {
    const dropdownRef = useRef(null);
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
        <div className={`${className} dropdown-menu-common`} ref={dropdownRef}>
            <div
                className='dropdown-trigger-common'
                onClick={()=>setIsOpen(prev=>!prev)}
            >
                <div>{label}</div>
                <div>{trigger(isOpen)}</div>
            </div>

            {isOpen && (
                <div className={`dropdown-content-common ${isOpen ? 'open' : ''}`}>
                    {options.map((option, index)=>(
                        <Button 
                            key={index}
                            label={option.label}
                            icon={option.icon}
                            className='dropdown-common'
                            variant=''
                        />    
                    ))} 
                </div>
            )}
                
        </div>
    )
}

export default DropdownCommon;