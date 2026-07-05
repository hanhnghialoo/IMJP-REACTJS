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
import { FaRegEye } from "react-icons/fa";

import { useState} from 'react';

function LoginForm( {onForgotPasswordFormMode} ) {
    const {t} = useTranslation();
    const [rememberMe, setRememberMe] = useState(false);
    const [loginForm, setLoginForm] = useState({
        userName: '',
        password:''
    })
    const handleChangeInput = (field) => (e) => {
        setLoginForm(prev => ({
            ...prev,
            [field]: e.target.value
        }))
    }
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
                        value={loginForm?.userName}
                        onChange={handleChangeInput('userName')}
                    />

                    <Input
                        label={t('auth:password')}
                        startIcon={<IoKeyOutline/>}
                        endIcon={<FaRegEye/>}
                        className='input-field'
                        value={loginForm?.password}
                        onChange={handleChangeInput('password')}
                        type='password'
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
                            className='text-btn-forgot-password'
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