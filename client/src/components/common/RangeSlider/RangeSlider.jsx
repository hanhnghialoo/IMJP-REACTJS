import './RangeSlider.css';

function RangeSlider({
    label,
    min,
    max,
    value,
    onChange,
    step = 1,
}){
    const handleMinChange = (e) => {
        const newMin = Number(e.target.value);
        onChange({
            min: Math.min(newMin, value.max),
            max: value.max
        });
    }

    const handleMaxChange = (e) => {
        const newMax = Number(e.target.value);
        onChange({
            min: value.min,
            max: Math.max(newMax, value.min)
        });
    }
    const left = ((value.min - min) / (max - min)) * 100;
    const right = ((value.max - min) / (max - min)) * 100;
    return (
        <div className="range-slider">
            {label && (
                <label className="range-slider-label">
                    {label}
                </label>
            )}

            <div className="range-slider-value">
                <span>{value.min}</span>
                <span>{value.max}</span>
            </div>

            <div className="range-slider-track-wrapper">

                <div className="range-slider-track" />

                <div
                    className="range-slider-progress"
                    style={{
                        left: `${left}%`,
                        width: `${right - left}%`
                    }}
                />

                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value.min}
                    onChange={handleMinChange}
                />

                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value.max}
                    onChange={handleMaxChange}
                />
            </div>
        </div>
    );
}

export default RangeSlider;