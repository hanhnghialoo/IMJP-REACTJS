import './Loading.css';
import { useTranslation } from 'react-i18next';

export default function Loading({
    variant = 'spinner',
    size = 'medium',
    message,
    overlay = false,
    fullScreen = false,
    transparent = false,
    inline = false,
    className = '',
}){
    const {t} = useTranslation();

    const loadingMessage = message;
    const loadingClassName = [
        'loading',
        `loading--${variant}`,
        `loading--${size}`,
        overlay && 'loading--overlay',
        fullScreen && 'loading--full-screen',
        transparent && 'loading--transparent',
        inline && 'loading--inline',
        className,
    ]
        .filter(Boolean)
        .join(' ');
    
        const renderIndicator = () => {
            switch (variant) {
                case 'dots':
                    return (
                        <div 
                            className='loading__dots'
                            aria-hidden='true'
                        >
                            <span/>
                            <span/>
                            <span/>
                        </div>
                    );
                
                    case 'pulse':
                        return(
                            <div
                                className='loading__pulse'
                                aria-hidden='true'
                            >
                                <span/>
                            </div>
                        );

                    case 'linear':
                        return(
                            <div
                                className='loading__linear'
                                aria-hidden='true'
                            >
                                <span/>
                            </div>
                        )

                    case 'spinner':
                    default:
                        return(
                            <div
                                className='loading__spinner'
                                aria-hidden='true'
                            >
                            </div>
                        );
            }
        };

        return(
            <div
                className={loadingClassName}
                role='status'
                aria-live='polite'
                aria-busy='true'
            >
                <div className='loading__content'>
                    {renderIndicator()}

                    {loadingMessage && (
                        <p className='loading__message'>
                            {loadingMessage}
                        </p>
                    )}
                </div>

                <span className='loading__screen-reader'>
                    {loadingMessage}
                </span>
            </div>
        )
}