import './NavigationSection.css';

import {useNavigation} from './hook/useNavigation.js'
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import Button from '../../../common/Button/Button';

function NavigationSection(){
    const {t} = useTranslation();
    const navItem = useNavigation();
    const navigate = useNavigate();
    const location = useLocation();
    return(
        <div className='navigation-section'>
            {navItem.map(item => {
                const Icon = item.icon;
                const isActive =
                    location.pathname === item.path ||
                    location.pathname.startsWith(`${item.path}/`);

                return (
                    <Button 
                        key={item.key}
                        label={t(item.labelKey)}
                        icon={<Icon/>}
                        className={`btn-nav ${ isActive?'active':''}`}
                        onClick={()=> navigate(item.path)}
                    />
                )
            })}
        </div>
    )
}

export default NavigationSection;