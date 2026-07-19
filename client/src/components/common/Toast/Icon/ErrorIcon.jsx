import './ErrorIcon.css';

export default function ErrorIcon() {
    return (
        <span
            className="error-toast-icon"
            aria-hidden="true"
        >
            <span className="error-toast-icon__glow" />

            <span className="error-toast-icon__animated">
                <svg
                    viewBox="0 0 52 52"
                    className="error-toast-icon__svg"
                >
                    <circle
                        className="error-toast-icon__circle"
                        cx="26"
                        cy="26"
                        r="21"
                        fill="none"
                    />

                    <path
                        className="
                            error-toast-icon__line
                            error-toast-icon__line--first
                        "
                        fill="none"
                        d="M18 18L34 34"
                    />

                    <path
                        className="
                            error-toast-icon__line
                            error-toast-icon__line--second
                        "
                        fill="none"
                        d="M34 18L18 34"
                    />
                </svg>
            </span>
        </span>
    );
}