import Toast from './Toast';

import { TOAST_POSITIONS } from './constants/toast.constants';

export default function ToastContainer({
    toasts,
    onRemoveToast,
    position = TOAST_POSITIONS.TOP_RIGHT,
}) {
    return (
        <div
            className={
                `toast-container ` +
                `toast-container--${position}`
            }
            aria-label="Notifications"
        >
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    toast={toast}
                    onClose={onRemoveToast}
                />
            ))}
        </div>
    );
}