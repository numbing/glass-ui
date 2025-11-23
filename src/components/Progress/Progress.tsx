import React from 'react';
import './Progress.css';

export interface ProgressProps {
  value?: number;
  label?: string;
  showPercent?: boolean;
  variant?: 'default' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  indeterminate?: boolean;
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({
  value = 0,
  label,
  showPercent = false,
  variant = 'default',
  size = 'md',
  indeterminate = false,
  className = '',
}) => {
  const clampedValue = Math.min(100, Math.max(0, value));

  const classes = [
    'gl-progress',
    `gl-progress-${size}`,
    variant !== 'default' && `gl-progress-${variant}`,
    indeterminate && 'gl-progress-indeterminate',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {(label || showPercent) && (
        <div className="gl-progress-label">
          {label && <span>{label}</span>}
          {showPercent && <span className="gl-progress-percent">{clampedValue}%</span>}
        </div>
      )}
      <div className="gl-progress-track" role="progressbar" aria-valuenow={clampedValue} aria-valuemin={0} aria-valuemax={100}>
        <div className="gl-progress-bar" style={{ width: indeterminate ? undefined : `${clampedValue}%` }} />
      </div>
    </div>
  );
};
