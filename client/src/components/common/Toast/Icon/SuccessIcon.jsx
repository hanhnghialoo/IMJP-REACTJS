import './SuccessIcon.css';

export default function SuccessIcon() {
    return (
        <span
            className="success-toast-icon"
            aria-hidden="true"
        >
            <span className="success-toast-icon__glow" />

            <span className="success-toast-icon__animated">
                <svg
                    viewBox="0 0 52 52"
                    className="success-toast-icon__svg"
                >
                    <circle
                        className="success-toast-icon__circle"
                        cx="26"
                        cy="26"
                        r="21"
                        fill="none"
                    />

                    <path
                        className="success-toast-icon__check"
                        fill="none"
                        d="M16 27L23 34L37 19"
                    />
                </svg>
            </span>
        </span>
    );
}