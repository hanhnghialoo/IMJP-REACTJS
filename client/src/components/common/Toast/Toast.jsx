import {
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

import {
    FaTimes,
} from 'react-icons/fa';

import { TOAST_VARIANTS } from './constants/toast.constants';

import './Toast.css';
import SuccessIcon from './Icon/SuccessIcon';
import WarningIcon from './Icon/WarningIcon';
import ErrorIcon from './Icon/ErrorIcon';
import InfoIcon from './Icon/InfoIcon';

const TOAST_ICONS = {
    [TOAST_VARIANTS.SUCCESS]: <SuccessIcon/>,
    [TOAST_VARIANTS.ERROR]: (
        <ErrorIcon/>
    ),
    [TOAST_VARIANTS.WARNING]: (
        <WarningIcon/>
    ),
    [TOAST_VARIANTS.INFO]: <InfoIcon />,
};

export default function Toast({
    toast,
    onClose,
}) {
    const {
        id,
        title,
        message,
        variant,
        duration = 4000,
        action,
    } = toast;

    const timerRef = useRef(null);
const startTimeRef = useRef(0);
const remainingTimeRef = useRef(duration);
const onCloseRef = useRef(onClose);

const [isPaused, setIsPaused] = useState(false);

useEffect(() => {
    onCloseRef.current = onClose;
}, [onClose]);

const closeToast = useCallback(() => {
    window.clearTimeout(timerRef.current);
    onCloseRef.current(id);
}, [id]);

const pauseTimer = useCallback(() => {
    if (duration <= 0 || isPaused) {
        return;
    }

    const elapsedTime =
        performance.now() - startTimeRef.current;

    remainingTimeRef.current = Math.max(
        remainingTimeRef.current - elapsedTime,
        0
    );

    window.clearTimeout(timerRef.current);
    timerRef.current = null;

    setIsPaused(true);

    // console.log(
    //     'Toast paused:',
    //     remainingTimeRef.current
    // );
}, [
    duration,
    isPaused,
]);

const resumeTimer = useCallback(() => {
    if (duration <= 0 || !isPaused) {
        return;
    }

    setIsPaused(false);

    // console.log(
    //     'Toast resumed:',
    //     remainingTimeRef.current
    // );
}, [
    duration,
    isPaused,
]);

useEffect(() => {
    if (duration <= 0 || isPaused) {
        return undefined;
    }

    startTimeRef.current = performance.now();

    timerRef.current = window.setTimeout(() => {
        closeToast();
    }, remainingTimeRef.current);

    return () => {
        window.clearTimeout(timerRef.current);
    };
}, [
    duration,
    isPaused,
    closeToast,
]);

useEffect(() => {
    remainingTimeRef.current = duration;
    setIsPaused(false);
}, [
    id,
    duration,
]);

    return (
        <div
            className={
                `toast toast--${variant}` +
                (
                    isPaused
                        ? ' toast--paused'
                        : ''
                )
            }
            role={
                variant === TOAST_VARIANTS.ERROR
                    ? 'alert'
                    : 'status'
            }
            aria-live={
                variant === TOAST_VARIANTS.ERROR
                    ? 'assertive'
                    : 'polite'
            }
            onPointerEnter={pauseTimer}
            onPointerLeave={resumeTimer}
            onFocusCapture={pauseTimer}
            onBlurCapture={resumeTimer}
            data-testid="toast"
        >
            <div className="toast__icon">
                {TOAST_ICONS[variant]}
            </div>

            <div className="toast__content">
                {title && (
                    <p className="toast__title">
                        {title}
                    </p>
                )}

                <p className="toast__message">
                    {message}
                </p>

                {action && (
                    <button
                        type="button"
                        className="toast__action"
                        onClick={() => {
                            action.onClick?.();
                            closeToast();
                        }}
                    >
                        {action.label}
                    </button>
                )}
            </div>

            <button
                type="button"
                className="toast__close"
                aria-label="Close notification"
                onClick={closeToast}
            >
                <FaTimes />
            </button>

            {duration > 0 && (
                <div
                    className="toast__progress"
                    style={{
                        animationDuration: `${duration}ms`,
                        animationPlayState: isPaused
                            ? 'paused'
                            : 'running',
                    }}
                />
            )}
        </div>
    );
}