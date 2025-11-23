import React from 'react';
import './Alert.css';

export interface AlertProps {
  variant?: 'success' | 'warning' | 'error' | 'info';
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const defaultIcons = {
  success: '✓',
  warning: '⚠',
  error: '✕',
  info: 'ℹ',
};

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  description,
  icon,
  closable = false,
  onClose,
  className = '',
  children,
}) => {
  const classes = ['gl-alert', `gl-alert-${variant}`, className].filter(Boolean).join(' ');

  const displayIcon = icon !== undefined ? icon : defaultIcons[variant];

  return (
    <div className={classes} role="alert">
      {displayIcon && <div className="gl-alert-icon">{displayIcon}</div>}
      <div className="gl-alert-content">
        {title && <div className="gl-alert-title">{title}</div>}
        {description && <div className="gl-alert-description">{description}</div>}
        {children}
      </div>
      {closable && (
        <button className="gl-alert-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
      )}
    </div>
  );
};
