import '../Auth.css';
import './ForgotPasswordForm.css';

import { useTranslation } from 'react-i18next';
import LogoIMJP from '../../../assets/image/LogoIMJP.png';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import TextButton from '../../common/Button/TextButton';

import { LuMail } from "react-icons/lu";
import { IoIosArrowRoundBack } from "react-icons/io";


function ForgotPasswordForm({onLoginFormMode}){
    const {t} = useTranslation(['auth','common']);
    
    return(
        <>
            <img 
                src={LogoIMJP} 
                alt='Logo IMJP'
                className='auth-logo'
            />
            <div className="auth-card slide-from-right-short">
                <h1 className='auth-title'>{t('auth:resetPassword')}</h1>
                <form className='auth-form'>
                    <Input
                        label={t('auth:email')}
                        startIcon={<LuMail />}
                        className='input-field'
                    />
                    
                    <div className='auth-option'>
                        <TextButton
                            label={t('auth:backToLogin')}
                            onClick={onLoginFormMode}
                            icon={<IoIosArrowRoundBack/>}
                        />
                    </div>

                    <Button
                        variant='primary'
                        label={t('auth:sendResetLink')}
                    />
                </form>
            </div>
        </>
    )
}

export default ForgotPasswordForm;