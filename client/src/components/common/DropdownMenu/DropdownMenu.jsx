import './DropdownMenu.css';

import Button from '../Button/Button';
import {useState, useRef, useEffect} from 'react'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

function DropdownMenu({
    trigger,
    notTrigger,
    options = [],
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
        <div className='dropdown-menu' ref={dropdownRef}>
            <div
                className='dropdown-trigger'
                onClick={()=>setIsOpen(prev=>!prev)}
            >
                {trigger(isOpen)}
            </div>

            {isOpen && (
                <div className={`dropdown-content ${isOpen ? 'open' : ''}`}>
                    {options.map((option, index)=>(
                        <Button 
                            key={index}
                            label={option.label}
                            icon={option.icon}
                            className={option.className}
                            variant=''
                        />    
                    ))}
                    <div className='dropdown-divider'></div>
                    <div className='languge-switcher'>
                        <LanguageSwitcher/>   
                    </div>   
                </div>
            )}
                
        </div>
    )
}

export default DropdownMenu;