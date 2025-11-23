import React from 'react';
import './Spinner.css';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'success' | 'warning' | 'error' | 'white';
  label?: string;
  overlay?: boolean;
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  variant = 'default',
  label,
  overlay = false,
  className = '',
}) => {
  const classes = [
    'gl-spinner',
    `gl-spinner-${size}`,
    variant !== 'default' && `gl-spinner-${variant}`,
    label && 'gl-spinner-with-label',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const spinner = (
    <div className={classes} role="status" aria-label={label || 'Loading'}>
      <div className="gl-spinner-circle" />
      {label && <div className="gl-spinner-label">{label}</div>}
    </div>
  );

  if (overlay) {
    return <div className="gl-spinner-overlay">{spinner}</div>;
  }

  return spinner;
};
