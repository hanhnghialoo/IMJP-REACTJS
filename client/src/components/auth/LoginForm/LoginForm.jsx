import '../Auth.css';
import './LoginForm.css';

import { useTranslation } from 'react-i18next';
import Checkbox from '../../common/Checkbox/Checkbox';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import LogoIMJP from '../../../assets/image/LogoIMJP.png'
import TextButton from '../../common/Button/TextButton';

import { FaRegUser, } from 'react-icons/fa';
import { IoKeyOutline} from 'react-icons/io5';
import { useState} from 'react';

function LoginForm( {onForgotPasswordFormMode} ) {
    const {t} = useTranslation(['auth','common']);
    const [rememberMe, setRememberMe] = useState(false);
    return (
            <>
                <img 
                    src={LogoIMJP} 
                    alt='Logo IMJP'
                    className='auth-logo slide-from-right-short'
                />
            <div className='auth-card slide-from-right-long'>
                <h1 className='auth-title'>{t('auth:login')}</h1>
                <form className='auth-form'>
                    <Input
                        label={t('auth:username')}
                        startIcon={<FaRegUser />}
                        className='input-field'
                    />

                    <Input
                        label={t('auth:password')}
                        startIcon={<IoKeyOutline/>}
                        className='input-field'
                    />
                    <div className='auth-option login-option'>
                        <Checkbox
                            name='remember'
                            label={t('auth:rememberMe')}
                            checked={rememberMe}
                            onChange={(e)=> setRememberMe(e.target.checked)}
                        />
                        <TextButton
                            label={t('auth:forgotPassword')}
                            onClick={onForgotPasswordFormMode}
                        />
                    </div>
                    <Button 
                        variant='primary' 
                        label={t('auth:login')}
                        disabled={false}
                    />
                </form>
      
            </div>
            </>
    )
}

export default LoginForm;