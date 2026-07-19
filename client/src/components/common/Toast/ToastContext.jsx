import { createContext, useCallback, useMemo, useState, useEffect } from "react";

import { DEFAULT_TOAST_DURATION, MAX_TOAST, TOAST_VARIANTS } from "./constants/toast.constants";

import ToastContainer from "./ToastContainer";

export const ToastContext = createContext(null);

function createToastId(){
    return `${Date.now()}-${crypto.randomUUID()}`;
}

export default function ToastProvider({
    children,
}){
    const [toasts, setToasts] = useState([]);
    const removeToast = useCallback((toastId)=>{
        setToasts((currentToasts)=>
            currentToasts.filter(
                (toast)=> toast.id !== toastId
            ));
    }, [] );
    const addToast = useCallback(
        ({
            title = '',
            message,
            variant = TOAST_VARIANTS.INFO,
            duration = DEFAULT_TOAST_DURATION,
            action = null,
        }) => {
            if (!message?.trim()){
                return null;
            }
            const toastId = createToastId();
            const newToast = {
                id: toastId,
                title,
                message,
                variant,
                duration,
                action,
            };

            setToasts((currentToasts)=>{
                const updateToasts = [
                    ...currentToasts,
                    newToast,
                ];

                return updateToasts.slice(-MAX_TOAST);
            });

            return toastId;
        },
        []
    );

    const success = useCallback(
        (message, options = {})=>
            addToast({
                ...options,
                message,
                variant: TOAST_VARIANTS.SUCCESS,
            }),
        [addToast]
    );

    const error = useCallback(
        (message, options = {}) =>
            addToast({
                ...options,
                message,
                variant: TOAST_VARIANTS.ERROR,
            }),
        [addToast]
    );

    const warning = useCallback(
        (message, options = {}) =>
            addToast({
                ...options,
                message,
                variant: TOAST_VARIANTS.WARNING,
            }),
        [addToast]
    );

    const info = useCallback(
        (message, options = {})=>
            addToast({
                ...options,
                message,
                variant: TOAST_VARIANTS.INFO,
            }),
        [addToast]
    );

    const clearToasts = useCallback(()=>{
        setToasts([]);
    },[]);

    const value = useMemo(
        () => ({
            addToast,
            removeToast,
            clearToasts,
            success,
            warning,
            error,
            info,
        }),
        [
            addToast,
            removeToast,
            clearToasts,
            success,
            error,
            warning,
            info,
        ]
    );

    // useEffect(() => {
    //     if (!import.meta.env.DEV) {
    //         return undefined;
    //     }

    //     window.imjpToast = {
    //         success,
    //         error,
    //         warning,
    //         info,
    //         clear: clearToasts,
    //     };

    //     console.info(
    //         '[IMJP] Toast DevTools enabled. ' +
    //         'Use window.imjpToast.success("Test toast")'
    //     );

    //     return () => {
    //         delete window.imjpToast;
    //     };
    // }, [
    //     success,
    //     error,
    //     warning,
    //     info,
    //     clearToasts,
    // ]);

    // const value = useMemo(
    //     () => ({
    //         addToast,
    //         removeToast,
    //         clearToasts,
    //         success,
    //         error,
    //         warning,
    //         info,
    //     }),
    //     [
    //         addToast,
    //         removeToast,
    //         clearToasts,
    //         success,
    //         error,
    //         warning,
    //         info,
    //     ]
    // );

    return(
        <ToastContext.Provider value={value}>
            {children}
            <ToastContainer
                toasts={toasts}
                onRemoveToast={removeToast}
            />
        </ToastContext.Provider>
    )
}
