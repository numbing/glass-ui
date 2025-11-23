import React, { useState, useRef, useEffect } from 'react';
import './Menu.css';

export interface MenuItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  shortcut?: string;
  danger?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export interface MenuProps {
  items: (MenuItem | { type: 'divider' } | { type: 'label'; label: string })[];
  trigger?: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export const Menu: React.FC<MenuProps> = ({
  items,
  trigger,
  position = 'bottom',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleItemClick = (item: MenuItem) => {
    if (item.disabled) return;
    if (item.onClick) {
      item.onClick();
    }
    setIsOpen(false);
  };

  const menuClasses = ['gl-menu', `gl-menu-${position}`, className].filter(Boolean).join(' ');

  return (
    <div className="gl-menu-wrapper" ref={wrapperRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <div className={menuClasses}>
          {items.map((item, index) => {
            if ('type' in item) {
              if (item.type === 'divider') {
                return <div key={`divider-${index}`} className="gl-menu-divider" />;
              }
              if (item.type === 'label') {
                return (
                  <div key={`label-${index}`} className="gl-menu-label">
                    {item.label}
                  </div>
                );
              }
            }

            const menuItem = item as MenuItem;
            return (
              <button
                key={menuItem.key}
                className={`gl-menu-item ${menuItem.danger ? 'gl-menu-item-danger' : ''}`}
                onClick={() => handleItemClick(menuItem)}
                disabled={menuItem.disabled}
              >
                {menuItem.icon && <span className="gl-menu-item-icon">{menuItem.icon}</span>}
                <span className="gl-menu-item-label">{menuItem.label}</span>
                {menuItem.shortcut && (
                  <span className="gl-menu-item-shortcut">{menuItem.shortcut}</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
