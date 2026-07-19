import './WarningIcon.css';

export default function WarningIcon() {
    return (
        <span
            className="warning-toast-icon"
            aria-hidden="true"
        >
            <span className="warning-toast-icon__glow" />

            <span className="warning-toast-icon__animated">
                <svg
                    viewBox="0 0 52 52"
                    className="warning-toast-icon__svg"
                >
                    <circle
                        className="warning-toast-icon__circle"
                        cx="26"
                        cy="26"
                        r="21"
                        fill="none"
                    />

                    <path
                        className="warning-toast-icon__line"
                        fill="none"
                        d="M26 16L26 30"
                    />

                    <circle
                        className="warning-toast-icon__dot"
                        cx="26"
                        cy="36"
                        r="2.5"
                    />
                </svg>
            </span>
        </span>
    );
}