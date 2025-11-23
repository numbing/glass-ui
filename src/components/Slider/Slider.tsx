import React, { useState } from 'react';
import './Slider.css';

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'onChange'> {
  label?: string;
  showValue?: boolean;
  size?: 'sm' | 'md' | 'lg';
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      label,
      showValue = false,
      size = 'md',
      min = 0,
      max = 100,
      step = 1,
      value,
      defaultValue = 0,
      onChange,
      className = '',
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const currentValue = value !== undefined ? value : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);
      setInternalValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
    };

    const progress = ((currentValue - min) / (max - min)) * 100;

    const sliderClasses = [
      'gl-slider',
      'gl-slider-filled',
      size !== 'md' && `gl-slider-${size}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className="gl-slider-wrapper">
        {(label || showValue) && (
          <div className="gl-slider-label">
            {label && <span>{label}</span>}
            {showValue && <span className="gl-slider-value">{currentValue}</span>}
          </div>
        )}
        <div className="gl-slider-container">
          <input
            ref={ref}
            type="range"
            className={sliderClasses}
            min={min}
            max={max}
            step={step}
            value={currentValue}
            onChange={handleChange}
            style={{ '--slider-progress': `${progress}%` } as React.CSSProperties}
            {...props}
          />
        </div>
      </div>
    );
  }
);

Slider.displayName = 'Slider';
