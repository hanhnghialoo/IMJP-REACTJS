import './LanguageSwitcher.css'

import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

function LanguageSwitcher(){
    const {i18n} = useTranslation();

    return(
        <div className='btn-language-switcher'>
            <button
                onClick={()=>i18n.changeLanguage('vi')}
                className='language'
            >
                <ReactCountryFlag countryCode="VN" className='icon-country' svg/>
                VI
            </button>

            <button
                onClick={()=>i18n.changeLanguage('en')}
                className='language'
            >

                <ReactCountryFlag countryCode="US" className='icon-country' svg/>
                EN 
            </button>

            <button
                // onClick={()=>i18n.changeLanguage('en')}
                className='language'
            >
                <ReactCountryFlag countryCode="JP" className='icon-country' svg/>
                JP
            </button>
        </div>
    )
}

export default LanguageSwitcher;