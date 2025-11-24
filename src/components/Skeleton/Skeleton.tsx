import React from 'react';
import './Skeleton.css';

export interface SkeletonProps {
  /**
   * Variant of the skeleton
   * @default 'text'
   */
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';

  /**
   * Width of the skeleton
   */
  width?: string | number;

  /**
   * Height of the skeleton
   */
  height?: string | number;

  /**
   * Animation type
   * @default 'wave'
   */
  animation?: 'wave' | 'pulse' | false;

  /**
   * Additional CSS class
   */
  className?: string;

  /**
   * Additional inline styles
   */
  style?: React.CSSProperties;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'text',
  width,
  height,
  animation = 'wave',
  className = '',
  style = {},
}) => {
  const formatDimension = (value: string | number | undefined) => {
    if (value === undefined) return undefined;
    return typeof value === 'number' ? `${value}px` : value;
  };

  const classes = [
    'gl-skeleton',
    `gl-skeleton-${variant}`,
    animation && `gl-skeleton-${animation}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const combinedStyle: React.CSSProperties = {
    width: formatDimension(width),
    height: formatDimension(height),
    ...style,
  };

  return <div className={classes} style={combinedStyle} />;
};

// Convenience components for common patterns
export interface SkeletonTextProps {
  /**
   * Number of lines to display
   * @default 3
   */
  lines?: number;

  /**
   * Width of the skeleton
   */
  width?: string | number;

  /**
   * Animation type
   * @default 'wave'
   */
  animation?: 'wave' | 'pulse' | false;

  /**
   * Additional CSS class
   */
  className?: string;
}

export const SkeletonText: React.FC<SkeletonTextProps> = ({
  lines = 3,
  width,
  animation = 'wave',
  className = '',
}) => {
  return (
    <div className={`gl-skeleton-text-wrapper ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          variant="text"
          width={index === lines - 1 ? '80%' : width}
          animation={animation}
        />
      ))}
    </div>
  );
};

export interface SkeletonAvatarProps {
  /**
   * Size of the avatar
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Animation type
   * @default 'wave'
   */
  animation?: 'wave' | 'pulse' | false;

  /**
   * Additional CSS class
   */
  className?: string;
}

export const SkeletonAvatar: React.FC<SkeletonAvatarProps> = ({
  size = 'md',
  animation = 'wave',
  className = '',
}) => {
  const sizeMap = {
    sm: 32,
    md: 40,
    lg: 56,
    xl: 80,
  };

  return (
    <Skeleton
      variant="circular"
      width={sizeMap[size]}
      height={sizeMap[size]}
      animation={animation}
      className={className}
    />
  );
};

export interface SkeletonCardProps {
  /**
   * Whether to include an avatar
   * @default true
   */
  avatar?: boolean;

  /**
   * Number of text lines
   * @default 3
   */
  lines?: number;

  /**
   * Animation type
   * @default 'wave'
   */
  animation?: 'wave' | 'pulse' | false;

  /**
   * Additional CSS class
   */
  className?: string;
}

export const SkeletonCard: React.FC<SkeletonCardProps> = ({
  avatar = true,
  lines = 3,
  animation = 'wave',
  className = '',
}) => {
  return (
    <div className={`gl-skeleton-card ${className}`}>
      {avatar && (
        <div className="gl-skeleton-card-header">
          <SkeletonAvatar size="md" animation={animation} />
          <div className="gl-skeleton-card-header-content">
            <Skeleton variant="text" width="60%" animation={animation} />
            <Skeleton variant="text" width="40%" animation={animation} />
          </div>
        </div>
      )}
      <SkeletonText lines={lines} animation={animation} />
    </div>
  );
};

export interface SkeletonTableProps {
  /**
   * Number of rows
   * @default 5
   */
  rows?: number;

  /**
   * Number of columns
   * @default 4
   */
  columns?: number;

  /**
   * Animation type
   * @default 'wave'
   */
  animation?: 'wave' | 'pulse' | false;

  /**
   * Additional CSS class
   */
  className?: string;
}

export const SkeletonTable: React.FC<SkeletonTableProps> = ({
  rows = 5,
  columns = 4,
  animation = 'wave',
  className = '',
}) => {
  return (
    <div className={`gl-skeleton-table ${className}`}>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="gl-skeleton-table-row">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton
              key={colIndex}
              variant="text"
              animation={animation}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
