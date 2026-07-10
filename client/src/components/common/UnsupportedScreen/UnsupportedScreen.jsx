import './UnsupportedScreen.css';
import { useTranslation } from 'react-i18next';
import backgroundUnsupportedScreen from '../../../assets/image/background-unsupported-screen.png';
import { PiMonitorThin } from "react-icons/pi";
import { IoIosWarning } from "react-icons/io";

export default function UnsupportedScreen({
    width,
    height,
    minWidth,
    minHeight,
}){
    const {t} = useTranslation();
    return(
        <div className='unsupported-screen-page'>
            <div className='unsupported-screen-background-image'>
                <img src={backgroundUnsupportedScreen} alt='Background'/>
            </div>
            <div className='unsupported-screen-background-card'>

                <div className='unsupported-image-group'>
                    <PiMonitorThin
                        className='unsupported-icon'
                    />
                    <IoIosWarning
                        className='unsupported-icon-caption'
                    />
                </div>

                <div className='unsupported-screen-content'>
                    <div className='unsupported-title'>
                        {t('supportScreen:unsupportedScreen')}
                    </div>

                    <div className='unsupported-caption'>
                        {t('supportScreen:unsupportedScreenCaption')}
                        <span className='unsupported-value'>{minWidth}x{minHeight}</span>
                    </div>
                </div>

                <div className='unsupported-request'>
                    <div className='unsupported-request-left'>
                        <PiMonitorThin
                            className='unsupported-icon-left'
                        />
                        <div className='unsupported-caption-left'>
                            {t('supportScreen:currentSize')}
                        </div>
                    </div>
                     <div className='unsupported-request-right'>
                        <PiMonitorThin
                            className='unsupported-icon-right'
                        />
                        <div className='unsupported-caption-right'>
                            {t('supportScreen:miniumSize')}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}