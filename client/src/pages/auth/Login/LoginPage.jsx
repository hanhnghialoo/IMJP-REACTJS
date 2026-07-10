import './LoginPage.css'
import LanguageSwitcher from '../../../components/common/LanguageSwitcher/LanguageSwitcher';
import { useState } from 'react';
import LoginForm from '../../../components/auth/LoginForm/LoginForm';
import ForgotPasswordForm from '../../../components/auth/ForgotPasswordForm/ForgotPasswordForm';

export default function LoginPage (){

    const [mode, setMode] = useState('login')
    return (
        <div className='login-page'> 
            {
                mode === 'login'
                    ? (
                        <LoginForm
                            onForgotPasswordFormMode={()=>setMode('forgot')}
                        />
                    )
                    :(
                        <ForgotPasswordForm
                            onLoginFormMode={()=>setMode('login')}
                        />
                    )

            }
            <LanguageSwitcher/>
    
            
        </div>
    );
}