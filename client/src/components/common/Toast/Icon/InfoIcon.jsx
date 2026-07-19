import './InfoIcon.css';

export default function InfoIcon() {
    return (
        <span
            className="info-toast-icon"
            aria-hidden="true"
        >
            <span className="info-toast-icon__glow" />

            <span className="info-toast-icon__animated">
                <svg
                    viewBox="0 0 52 52"
                    className="info-toast-icon__svg"
                >
                    <circle
                        className="info-toast-icon__circle"
                        cx="26"
                        cy="26"
                        r="21"
                        fill="none"
                    />

                    <circle
                        className="info-toast-icon__dot"
                        cx="26"
                        cy="17"
                        r="2.5"
                    />

                    <path
                        className="info-toast-icon__line"
                        fill="none"
                        d="M26 24L26 36"
                    />
                </svg>
            </span>
        </span>
    );
}